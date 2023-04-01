import { useAuth } from "@src/hooks/useAuth";
import { Navigate, Route } from "react-router-dom";

export default function ProtectedRoute({
  children,
  ...rest
}: {
  children: React.ReactElement;
}) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/auth/signin" />;
}
