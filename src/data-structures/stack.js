const Stack = function () {
  const items = []

  this.push = function (item) {
    items.push(item)
  }
  this.pop = function () {
    return items.pop()
  }
  this.peek = function () {
    return items[items.length - 1]
  }
  this.size = function () {
    return items.length
  }
  this.isEmpty = function () {
    return items.length == 0
  }
  this.clear = function () {
    items.length = 0
  }
  this.print = function () {
    return items.join(', ')
  }

}
export default Stack