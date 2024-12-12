"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    let x = -b / (a * 2);
    arr.push(x);
  } else if (d > 0) {
    let x = (-b + Math.sqrt(d) ) / (2 * a);
    let anotherX = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(x, anotherX);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentRate = percent / 100 / 12;
  let body = amount - contribution;
  let payment = body * (percentRate + (percentRate / (((1 + percentRate) ** countMonths) - 1)));
  return parseFloat((payment * countMonths).toFixed(2));
}
