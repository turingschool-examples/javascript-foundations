var { createCustomer, greeting, bookServices, createService, applyGiftCard } = require("./spa")
var assert = require('chai').assert;


describe('Customer', function () {
  it.skip('should create a customer', function () {
    var kayla = createCustomer('Kayla', 100, ['acupuncture', 'seaweed wrap'])
    var ramiro = createCustomer('Ramiro', 0,[])
    assert.equal(kayla.name, 'Kayla')
    assert.equal(kayla.bill, 100)
    assert.equal(kayla.bookings[0], 'acupuncture')
    assert.equal(ramiro.name, 'Ramiro')
    assert.equal(ramiro.bill, '0')
    assert.deepEqual(ramiro.bookings, [])
  })

  it.skip('should start with no booked services',function(){
    var customer = createCustomer('Leta', 0)
    assert.deepEqual(customer.bookings, [])
  })

  it.skip('should greet customers and know if they have been there before (previous bookings)', function () {
    var nick  = createCustomer('Nick', 0, [])
    var tracey = createCustomer('Tracey', 50, ['facial']) 
    var welcomeNick = greeting(nick)
    var welcomeTracey = greeting(tracey)

    assert.equal(welcomeNick, 'Nick! Welcome to Happy Spa')
    assert.equal(welcomeTracey, 'Tracey! Welcome back to Happy Spa')
  })

  it.skip('should create service', function(){
    var facialService = createService('facial', 50)
    var emptyService = createService()
    assert.deepEqual(facialService, {name: 'facial', cost:50 })
    assert.deepEqual(emptyService,'Please provide service name and cost.')
  })

  it.skip('should book services', function(){
    var travis = createCustomer('Travis', 10, ['steam room'])
    var will = createCustomer('Will', 0, [])
    var massage = createService('massage', 50)
    var acupuncture = createService('acupuncture', 50)
    
    var travisService = bookServices(travis, massage)
    var willService = bookServices(will, acupuncture) 
  
    assert.deepEqual(travisService.bookings, [ 'steam room', 'massage' ])
    assert.deepEqual(willService.bookings, ['acupuncture'])

  })

  it.skip('should rack up a bill', function(){
    var nik = createCustomer('Nik', 0 , [])
    var footMassage = createService('foot massage', 65)
    var facial = createService('facial', 50)
    var nikFootMassage = bookServices(nik, footMassage)
    var nikFacial = bookServices(nik, facial)
    
    assert.deepEqual(nikFootMassage.bookings, ['foot massage','facial'])
    assert.deepEqual(nikFacial.bill, 115)
  })

  it.skip('should be able to find which services are affordable based on gift card amount', function(){
    var allServices = [
      createService('sauna', 10),
      createService('massage', 50),
      createService('facial', 50),
      createService('foot massage', 65),
      createService('acupuncture', 50),
      createService('steam room', 10)
    ]

    var affordableServices1 = applyGiftCard(allServices, 30)
    var affordableServices2 = applyGiftCard(allServices, 50)
    
    assert.deepEqual(affordableServices1, ['sauna', 'steam room'])
    assert.deepEqual(affordableServices2, ['sauna', 'massage', 'facial', 'acupuncture', 'steam room'])
    
  })
})
