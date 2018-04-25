/**
 * We want to get murder robot dog where it needs to .kill(), .drive(), .bark(), but it cannot poop().
 * Classical inheritance makes it difficult to implement such structures
 * Classical inheritance is good when inheritance is additive.
 * Animal
 *  - poops
 *  Cat
 *    - meow
 *  Dog
 *    - bark
 * Robot
 *  - drive
 *  Cleaning Robot
 *    - clean
 *  Murder Robot
 *    - kill
 */

const Animal = {
  poops: () => { console.log('yew whats that smell'); }
}

const Dog = {
  ...Animal,
  bark: () => { console.log('the dog goes, wooff wooff'); }
}

const Cat = {
  ...Animal,
  meow: () => { console.log('the cat goes, meow'); }
}

const Robot= {
  drive: () => { console.log('i can drive'); }
}

const CleaningRobot = {
  ...Robot,
  clean: () => { console.log('Okey i am cleaning')}
}

const MurderRobot = {
  ...Robot,
  kill: () => { console.log('I kill all the cats and humans'); }
}

const MurderRobotDog = {
  ...MurderRobot,
  bar: Dog.bark
}

console.log(MurderRobotDog);