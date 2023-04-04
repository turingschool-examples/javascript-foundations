function createMeal(name, request, num) {
    var meal = {
        name: name,
        specialRequests: request,
        tableNumber: num,
        complete: false,
    }
    return meal;
}

function getMade(meal) {
    meal.complete = true;
   return meal;
}

function announceMeal(meal) {
    if (meal.complete === true) {
        return `Order up - ${meal.name} for table ${meal.tableNumber}!`
    } else {
        return `This ${meal.name} is not completed yet`
    }
}

function createOrder(orderObj) {
    var order = {
        tableNumber: orderObj.tableNumber,
        meals: orderObj.meals,
        completedMeals: []
    }
    return order;
}

function cookMeal(order, meal) {
    var updatedOrder = {
        completedMeals: order.completedMeals
    }
    if (meal.tableNumber === order.tableNumber) {
        order.completedMeals.push(meal.name);
    } 
    return updatedOrder;
}

function listOrders(order) {
    var orderNames = [];
    for (var i = 0; i < order.meals.length; i++){
        orderNames.push(order.meals[i].name);
    }
    return orderNames;
}

module.exports = {
    createMeal,
    getMade,
    createOrder,
    cookMeal,
    listOrders,
    announceMeal,
 };
