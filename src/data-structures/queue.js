const Queue = function () {
  const items = []

  this.size = function () {
    return items.length
  }
  this.isEmpty = function () {
    return items.length == 0
  }
  this.enqueue = function (item) {
    items.push(item)
  }
  this.dequeue = function (item) {
    return items.shift()
  }
  this.peek = function () {
    return items[0]
  }
  this.clear = function () {
    items.length = 0
  }
  this.print = function () {
    return items.join(', ')
  }
}

export default Queue