import { useAuth } from "@src/hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const { user } = useAuth();
  return user ? (
    children
  ) : (
    <Navigate
      to={{ pathname: "/auth/signin", search: window.location.search }}
    />
  );
}
