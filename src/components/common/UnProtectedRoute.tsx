import { useAuth } from "@src/hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function UnProtectedRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const { user } = useAuth();
  return !user ? (
    children
  ) : (
    <Navigate to={{ pathname: "/dashboard", search: window.location.search }} />
  );
}
