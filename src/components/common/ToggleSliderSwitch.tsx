const ToggleSliderSwitch = ({
  value = "Monthly",
  onChange,
}: {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="switches-container">
      <input
        type="radio"
        id="switchMonthly"
        name="switchPlan"
        value="monthly"
        checked={value === "monthly"}
        onChange={onChange}
      />
      <input
        type="radio"
        id="switchYearly"
        name="switchPlan"
        value="yearly"
        onChange={onChange}
        checked={value === "yearly"}
      />
      <label htmlFor="switchMonthly">Monthly</label>
      <label htmlFor="switchYearly">Yearly</label>
      <div className="switch-wrapper">
        <div className="switch">
          <div>Monthly</div>
          <div>Yearly</div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSliderSwitch;
