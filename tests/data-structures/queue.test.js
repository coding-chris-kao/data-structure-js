import Queue from '@/data-structures/queue.js'

describe('Basic Queue method all work', () => {
  const myQueue = new Queue()

  test('Queue.size() works', () => {
    expect(myQueue.size()).toBe(0)
  })

  test('Queue.isEmpty() works', () => {
    expect(myQueue.isEmpty()).toBeTruthy
  })

  test('Queue.enqueue() works', () => {
    myQueue.enqueue(1)
    myQueue.enqueue(4)
    expect(myQueue.size()).toBe(2)
    expect(myQueue.isEmpty()).toBeFalsy
  })

  test('Queue.peek() works', () => {
    expect(myQueue.peek()).toBe(1)
  })

  test('Queue.print() works', () => {
    expect(myQueue.print()).toBe('1, 4')
  })

  test('Queue.clear() works', () => {
    myQueue.clear()
    expect(myQueue.size()).toBe(0)
    expect(myQueue.isEmpty()).toBeTruthy()
  })

  test('Queue.dequeue() works', () => {
    myQueue.enqueue(1)
    myQueue.enqueue(4)
    expect(myQueue.dequeue()).toBe(1)
    expect(myQueue.dequeue()).toBe(4)
    expect(myQueue.size()).toBe(0)
    expect(myQueue.isEmpty()).toBeTruthy()
  })

})