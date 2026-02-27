import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export function Routes(){
  return (
    <BrowserRouter>
      <ManagerRoutes />
      {/* <EmployeeRoutes/> */}
      {/* <AuthRoutes/> */}
    </BrowserRouter>
  )
}