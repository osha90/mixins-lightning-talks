/**
 * 
 * What is a mixin? 
 * its like an ice cream shop where you mix different flavours with different toppings
 * It helps with inheritance
 */
const chocolate = {
  hasChocolate: () => true
};

const caramelSwirl = {
  hasCaramelSwirl: () => true
};

const pecans = {
  hasPecans: () => true
};

const iceCream = Object.assign({}, chocolate, caramelSwirl, pecans);

console.log(iceCream);