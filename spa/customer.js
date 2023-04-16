
module.exports = { 
  createCustomer,
  greeting,
  bookServices,
  createService,
  applyGiftCard
 }

function createCustomer(name, bill, bookings) {
  var customer = {
    name: name,
    bill: bill,
    bookings: bookings
  }
  if (!bookings) {
    customer.bookings = [];
  }
  return customer;
}

function greeting(customer) {
  if (!customer.bill) {
    return `${customer.name}! Welcome to Happy Spa`
  }
  return `${customer.name}! Welcome back to Happy Spa`
}

function createService(service, price) {
  if (!service && !price) {
    return "Please provide service name and cost."
  }
  var service = {
    name: service,
    cost: price
  }
  return service;
}

function bookServices(customer, service) {
  customer.bookings.push(service.name);
  customer.bill = customer.bill + service.cost;
  return customer;
}

function applyGiftCard(services, amount) {
  var availableServices = [];
  for (var i = 0; i < services.length; i++) {
    if (services[i].price <= amount) {
      availableServices.push(services[i].name);
    }
  }
  return availableServices;
}