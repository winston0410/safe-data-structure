import Stack from '../src/index'

describe('instance of Stack', function(){
  const stack = new Stack()
  it('should not expose internal properties', function (){
    expect(stack.stack).toBe(undefined)
  })

  it('should export a head property', function (){
    expect(stack.head).toBeDefined()
  })

  it('should expose a length property', function (){
    expect(stack.length).toBeDefined()
  })

  it('should have a push() method', function (){
    expect(typeof stack.push).toBe('function')
  })

  it('should have a pop() method', function (){
    expect(typeof stack.pop).toBe('function')
  })

  it('should have a clear() method', function (){
    expect(typeof stack.clear).toBe('function')
  })

  it('should have a peek() method', function (){
    expect(typeof stack.peek).toBe('function')
  })

  it('should have a size() method', function (){
    expect(typeof stack.size).toBe('function')
  })

  it('should have a map() method', function (){
    expect(typeof stack.map).toBe('function')
  })

  it('should have a clone() method', function (){
    expect(typeof stack.clone).toBe('function')
  })

  it('should have a toArray() method', function (){
    expect(typeof stack.toArray).toBe('function')
  })
})

describe('when push() is called', function(){
  describe('when a single element is provided', function (){
    const stack = new Stack()
    stack.push('hello')

    it('should push it into the stack', function (){
      expect(stack.length).toBe(1)
    })

    it('should become the head of the stack', function (){
      expect(stack.head).toBe('hello')
    })
  })
})

describe('when push() is called', function (){
  describe('when multiple arguments are provided', function (){

    const stack = new Stack()
    stack.push('hello',"good","bad","bye")

    it('should push them all into the stack', function (){
      expect(stack.length).toBe(4)
    })

    it('should set the last argument of push() as the head', function (){
      expect(stack.head).toBe("bye")
    })
  })
})

describe('when pop() is called', function(){

  const stack = new Stack()
  stack.push('hello',"good","bad","bye")
  // stack.pop()

  it('should remove the last element', function (){
    expect(stack.pop).toBe("bye")
  })

  it('should set the head to the second last element', function (){
    expect(stack.head).toBe("bad")
  })
})

describe('when clear() is called', function (){
  it('should remove all elements from the stack', function (){
    const stack = new Stack('hello', 'world', 'hi', 'bye')
    stack.clear()
    expect(stack.length).toBe(0)
    expect(stack.head).toBe(null)
  })
})

describe('when clone() is called', function (){
  it('should create a new instance of Stack', function (){
    const stack = new Stack('hello', 'world', 'hi', 'bye')
    expect(stack.clone()).toBeInstanceOf(Stack)
  })
})

describe('when map() is called', function (){
  it('should transform all elements in the stack based on callback function', function (){
    const stack = new Stack('hello', 'world', 'hi', 'bye')
    // expect(stack.map()).toEqual(expect.arrayContaining(['hello', 'world', 'hi', 'bye']))
    expect(stack.map()).toStrictEqual(['hello', 'world', 'hi', 'bye'])
  })
})

describe('when toArray() is called', function (){
  it('should return an array', function (){
    const stack = new Stack('hello', 'world')
    expect(stack.toArray()).toStrictEqual(['hello', 'world'])
  })
})
