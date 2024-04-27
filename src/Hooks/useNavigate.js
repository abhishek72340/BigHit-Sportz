import { useNavigate as useRouterNavigate } from "react-router-dom";

export const useNavigate = () => {
  const navigate = useRouterNavigate();
  return navigate;
};
