import { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";

export function formatDate(dateString?: string): string {
    if (!dateString) return '';
    let date = new Date(dateString);
    let formatter = new Intl.DateTimeFormat('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    let formatted = formatter.formatToParts(date);
    let day = formatted[2].value;
    let ordinal = getOrdinal(Number(day));
    return `${formatted[0].value} ${day}${ordinal}, ${formatted[4].value}`;

    function getOrdinal(day: number): string {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
}


export function useContractDetail(code?: string) {
    const [contractData, setContractData] = useState<Record<string, any>|undefined>();
    const [error, setError] = useState('');
    const [contractItems, setContractItems] = useState<Record<string, any>>();
    const base_url = import.meta.env.VITE_API_CONTACT_DETAIL_ENDPOINT ?? 'https://payy-test.herokuapp.com/v1/contract';
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            setisLoading(true);
            const query = new URLSearchParams(window.location.search)
            console.log(query);
            const { data } = await axios.get(`${base_url}/details/${code}`);
            const respData = data.data;
            setContractData(respData);
            setError('');
            const items = respData?.contract?.items.map((item: any, index: number) => {
                const id = `${index === 0 ? '01.' : index+1 < 10 ? `0${index+1}.` : `${index+1}.`}`;
                return {...item, id: id, subtotal: Number(item.price)* item.quantity.amount};
            });

            setContractItems({
                total: items.reduce((p:number, n: Record<string, any>) => p+n.subtotal, 0),
                items
            });
            
        } catch (error: any) {
            notification.error({
                message: error?.message ?? 'unable get data from server, please try again'
            });
        }
        setisLoading(false);
    }

    async function acceptOrDecline(accept=false) {
        try {
            await axios.put(`${base_url}/${contractData?.contract.id}/accept-contract`, {accept}, {
                headers: {
                    'Authorization': `Bearer ${contractData?.token}`
                }
            });
            await loadData();
        } catch (error:any) {
            notification.error({
                message: error?.message ?? 'unable to complete this action, please try again'
            });
        }
    }

    async function markAsPaid(memo='', amount=0, installment='') {
        try {
            await axios.put(`${base_url}/${contractData?.contract.id}/add-payment`, {
                description: memo,
                amount, installment,
                payer: contractData?.payer?.id
            }, {
                headers: {
                    'Authorization': `Bearer ${contractData?.token}`
                }
            });
            await loadData();
        } catch (error: any) {
            notification.error({
                message: error?.message ?? 'unable mark as paid, please try again'
            });
        }
    }

    return {contractData, contractItems, error, base_url, acceptOrDecline, markAsPaid, isLoading};
}