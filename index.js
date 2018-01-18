
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length > 0) {
    katzDeliLine.push(name);
    var position = katzDeliLine.indexOf(name) + 1;
    return position;
  }
}
