function createCustomer(firstName, cost, appointments) {
  var customer = {
    name: firstName,
    bill: cost,
    bookings: appointments || []
  }
  return customer
};

function greeting(patron) {
  if(patron.bookings[0]) {
    return `${patron.name}! Welcome back to Happy Spa`
  }
  return `${patron.name}! Welcome to Happy Spa`
};

function createService(type, price) {
  var service = {
    name: type,
    cost: price
  }
  if(!service.name && !service.cost) {
    return `Please provide service name and cost.`
  }
  return service
};

function bookServices(customer, service) {
  customer.bookings.push(service.name)
  customer.bill += service.cost
  return customer
};

function applyGiftCard(services, giftCard) {
  var affordableServices = [];
  for(var i = 0; i < services.length; i++) {
    if(giftCard >= services[i].price) {
      affordableServices.push(services[i].name)
    }
  }
  return affordableServices
};

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
};
