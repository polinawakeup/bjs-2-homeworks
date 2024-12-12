"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let anotherX;
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    console.log('У уравнения нет корней, дискриминант меньше нуля')
    return arr;
  } else if (d === 0) {
    x = -b / (a * 2);
    arr.push(x);
  } else {
    x = (-b + Math.sqrt(d) ) / (2 * a);
    anotherX = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(x, anotherX);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let body = amount - contribution;
  let payment = body * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let totalAmount = parseFloat((payment * countMonths).toFixed(2));
  return totalAmount;
}
