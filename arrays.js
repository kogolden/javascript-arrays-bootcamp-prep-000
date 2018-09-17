var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(Array, Element) {
  Array = [Element, ...Array];
  return Array
}
function destructivelyAddElementToBeginningOfArray(Array, Element) {
  Array.unshift(Element)
  return Array
}
function accessElementToEndOfArray(Array, Element) {
  Array = [...Array, Element];
  return Array
}
function addElementToEndOfArray(Array, Element) {
  
}
function destructivelyAddElementToEndOfArray(Array, Element) {
  
}
function accessElementToEndOfArray(Array, Element) {
  
}