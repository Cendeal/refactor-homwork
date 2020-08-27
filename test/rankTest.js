const rankTest = require('ava');
const {rannk} = require('../src/rank')
rankTest('foo', t => {
  t.pass();
});
// const voyage = {
//   zone: 'west-indies',
//   length: 10,
// };
// const history = [
//   {
//     zone: 'east-indies',
//     profit: 5,
//   }, {
//     zone: 'west-indies',
//     profit: 15,
//   }, {
//     zone: 'china',
//     profit: -2,
//   },
//   {
//     zone: 'west-africa',
//     profit: 7,
//   },
// ];
// const myRating = rating(voyage, history);
// console.log(`myRating: ${myRating}`);
rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});
