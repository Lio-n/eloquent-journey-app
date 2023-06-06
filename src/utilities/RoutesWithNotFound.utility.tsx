import Page404 from "@/pages/404";
import { Route, Routes } from "react-router-dom";

interface Props {
  children: JSX.Element[] | JSX.Element;
}
function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default RoutesWithNotFound;
