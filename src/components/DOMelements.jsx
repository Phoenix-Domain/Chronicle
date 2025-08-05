
function DOMelements(){
  const clientNameInput = document.querySelector('#name');
  const clientEmailInput = document.querySelector('#email');
  const clientPhoneInput = document.querySelector('#phone');
  const clientServiceInput = document.querySelector('#service');
  const clientBookingDateInput = document.querySelector('#bookingDate');
  const clientStatusInput = document.querySelector('#status');
  const addClientBtn = document.querySelector('#addClientBtn');

  return{
    clientNameInput,
    clientEmailInput,
    clientPhoneInput,
    clientServiceInput,
    clientBookingDateInput,
    clientStatusInput,
    addClientBtn
  }
}

export default DOMelements;