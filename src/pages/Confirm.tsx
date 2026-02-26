import { Navigate, useLocation } from "react-router-dom"
import okSvg from "../assets/ok.svg"

export function Confirm(){
  const location = useLocation()

  //Prevent from manually accessing the page without submitting the form
  if (!location.state?.fromSubmit) {
    return <Navigate to="/" replace />
  }

  return(
    <div className="bg-gray-500 lg:w-[512px] p-10 gap-6 rounded-xl flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold text-center text-green-100">Request Confirmed</h1>

      <img src={okSvg} alt="Confirmed icon" className="w-28" />

      <p className="text-sm text-gray-200 text-center">Now you just have to wait! Your request is being analysed, and soon you'll receive an email with the result.</p>

      <a href="/" className="w-full p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear">New request</a>
    </div>
  )
}