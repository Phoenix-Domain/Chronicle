import DOMelements from "./DOMelements";
import { useState, useEffect } from "react";

function Form (){
const [clientInfo, setClientInfo] = useState([])

useEffect(() => {
  const { clientNameInput,clientEmailInput,clientPhoneInput,clientServiceInput,clientBookingDateInput,clientStatusInput,addClientBtn } = DOMelements()
},[])



  return (
    <form action="" className="flex flex-col justify-between gap-5 p-3">
      <label className="flex flex-col">
        Full Name: 
        <input id="name" type="text" className="border-1" />
      </label>

      <label className="flex flex-col">
        Email: 
        <input id="email" type="text" className="border-1" />
      </label>

      <label className="flex flex-col">
        Phone Number: 
        <input id="phone" type="text" className="border-1" />
      </label>

      <label className="flex flex-col">
        Service Type: 
        <input id="service" type="text" className="border-1" />
      </label>

      <label className="flex flex-col">
        Booking Date: 
        <input id="bookingDate" type="date" className="border-1" />
      </label>

      <label className="flex flex-col">
        Status: 
        <select type="date" id="status" className="border-1 bg-[#0a0a23] text-white">
          <option value="Select Status">Select Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </label>

      <button type="submit" id="addClientBtn" className="border-1 py-1 px-4 w-fit rounded-full">Add Client</button>
    </form>
  )
}

export default Form;