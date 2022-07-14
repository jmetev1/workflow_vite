import names from './names.json';

function r(names) {
  return function () {
    return names[~~(Math.random() * names.length)];
  };
}

// var random = (module.exports = function() {
//   return r(names) + ' ' + r(names);
// });
const random = {};
random.first = random.middle = random.place = random.last = r(names);

export default random;
