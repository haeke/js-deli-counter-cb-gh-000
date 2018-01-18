
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    var position = katzDeliLine.indexOf(name) + 1;
    return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ` + katzDeliLine.shift() + `.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine === undefined) {
    return 'The line is currently empty.';
  }
}
