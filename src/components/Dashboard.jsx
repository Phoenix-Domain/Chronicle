import DashHeader from "./DashHeader";
import Form from "./Form";

function DashBoard(){
  return(
    <div className="my-10 border-1 border-gray-500">
      <DashHeader />
      <Form />
    </div>
  )
}

export default DashBoard;