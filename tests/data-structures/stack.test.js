import Stack from '@/data-structures/stack.js'

describe('Basic Stack method all work', () => {
  const myStack = new Stack()

  test('Stack.size() works', () => {
    expect(myStack.size()).toBe(0)
  })

  test('Stack.isEmpty() works', () => {
    expect(myStack.isEmpty()).toBeTruthy()
  })

  test('Stack.push() works', () => {
    myStack.push(1)
    myStack.push(5)
    expect(myStack.size()).toBe(2)
    expect(myStack.isEmpty()).toBeFalsy()
  })

  test('Stack.peek() works', () => {
    expect(myStack.peek()).toBe(5)
  })

  test('Stack.print works', () => {
    let item = myStack.print()
    expect(item).toBe('1, 5')
  })

  test('Stack.pop() works', () => {
    let item = myStack.pop()
    expect(item).toBe(5)
  })

  test('Stack.clear() works', () => {
    myStack.clear()
    expect(myStack.isEmpty()).toBeTruthy()
  })
})