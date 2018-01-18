
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length > 0) {
    katzDeliLine.push(name);
    var position = katzDeliLine.findIndex(name);
    return position;
  }
}
