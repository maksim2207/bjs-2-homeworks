"use strict"
function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;

    if (d < 0) {
        arr = [];
    } else if (d === 0) {
        arr = [-b / (2 * a)];
    } else if (d > 0) {
        arr = [
            (-b + Math.sqrt(d)) / (2 * a),
            (-b - Math.sqrt(d)) / (2 * a)
        ];
    }

    return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthTotal = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthPayment = loanBody * (monthTotal + (monthTotal / (((1 + monthTotal)**countMonths) - 1)));
  let totalPayment = monthPayment * countMonths;
  let roundedTotalPayment =  Math.round(totalPayment * 100) / 100;

  return roundedTotalPayment;

}