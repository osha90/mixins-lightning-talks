/**
 * The above in functional mixins style
 */
const Animal = (Obj) => {
  return Object.assign(obj, {
    poops: () => { console.log('yew whats that smell'); }
  })
};

const Dog = (Obj) => {
  return Object.assign(Obj, {
    bark: () => { console.log('the dog goes woff woff'); }
  })
}

const Robot = (Obj) => {
  return Object.assign(Obj, {
    drive: () => { console.log('yeah i can drive'); }
  })
};

const MurderRobot = (Obj) => {
  return Object.assign(Obj, {
    kill: () => { console.log('lets kill some cats and humans i say.'); }
  })
}

const MurderRobotDog = [Dog, Robot, MurderRobot].reduce((acc, fn) => fn(acc), {});

console.log(MurderRobotDog);