const form = document.getElementById('address-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const fullname = document.getElementById('fullname').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const pincode = document.getElementById('Pincode').value;
  const mobilenumber = document.getElementById('MobileNumber').value;
  
  console.log(fullname, address, city, state, pincode,mobilenumber);
  window.location.href="invoice.html"
});