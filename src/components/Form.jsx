function Form (){
  return (
    <form action="" className="flex flex-col justify-between gap-5 p-3">
      <label className="flex flex-col">
        Full Name: 
        <input type="text" className="border-1" />
      </label>

      <label className="flex flex-col">
        Email: 
        <input type="text" className="border-1" />
      </label>

      <label className="flex flex-col">
        Phone Number: 
        <input type="text" className="border-1" />
      </label>

      <label className="flex flex-col">
        Service Type: 
        <input type="text" className="border-1" />
      </label>

      <label className="flex flex-col">
        Booking Date: 
        <input type="date" className="border-1" />
      </label>

      <label className="flex flex-col">
        Status: 
        <select type="date" className="border-1 bg-[#0a0a23] text-white">
          <option value="Select Status">Select Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </label>

      <button type="submit" className="border-1 py-1 px-4 w-fit rounded-full">Add Client</button>
    </form>
  )
}

export default Form;