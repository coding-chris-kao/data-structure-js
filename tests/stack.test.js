import Stack from '../main/stack.js'

describe('Basic stack method all work', () => {
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
    let output = myStack.print()
    expect(output).toBe('1, 5')
  })

  test('Stack.pop() works', () => {
    let value = myStack.pop()
    expect(value).toBe(5)
  })

  test('Stack.clear() works', () => {
    myStack.clear()
    expect(myStack.isEmpty()).toBeTruthy()
  })
})