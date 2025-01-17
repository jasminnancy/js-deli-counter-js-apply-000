function takeANumber(line, name) {
  var number = line.length + 1
  line.push(name)
  return `Welcome, ${name}. You are number ${number} in line.`
}
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}
function currentLine(line) {
  var newLine = "The line is currently: "
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      newLine += i + 1 + ". " + line[i] + ", "
    } return newLine.slice(0, -2)
  }
  else {
    return "The line is currently empty."
  }
}