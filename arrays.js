var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(Array, Element) {
  Array = [Element, ...Array];
  return Array
}
function destructivelyAddElementToBeginningOfArray(Array, Element) {
  Array.unshift(Element)
  return Array
}
function addElementToEndOfArray(Array, Element) {
  Array = [...Array, Element];
  return Array
}
function destructivelyAddElementToEndOfArray(Array, Element) {
  Array.push(Element)
  return Array
}
function accessElementInArray(Array, Index) {
  return(Array[Index])
}
function destructivelyRemoveElementFromBeginningOfArray(Array, Element) {
  
}
function removeElementFromBeginningOfArray(Array, ELement) {
  
}
function destructivelyRemoveElementFromEndOfArray(Array, Element) {
  
}
function removeElementFromEndOfArray(Array, Element) {
  
}