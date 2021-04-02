import Stack from '../src/index'

describe('instance of Stack', function(){
  const stack = new Stack()
  it('should not expose internal properties', function (){
    expect(stack.stack).toBe(undefined)
  })

  it('should export a head property', function (){
    expect(stack.head).toBeDefined()
  })

  it('should expoes a length property', function (){
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

  })

  it('should have a size() method', function (){

  })

  it('should have a map() method', function (){

  })

  it('should have a clone() method', function (){

  })

  it('should have a toArray() method', function (){

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
    it('should push them all into the stack', function (){

    })

    it('should set the last argument of push() as the head', function (){

    })
  })
})

describe('when pop() is called', function(){
  it('should remove the last element', function (){

  })

  it('should set the head to the second last element', function (){

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

  })
})

describe('when map() is called', function (){
  it('should transform all elements in the stack based on callback function', function (){

  })
})

describe('when toArray() is called', function (){
  it('should return an array', function (){
    const stack = new Stack('hello', 'world')
    expect(stack.toArray()).toStrictEqual(['hello', 'world'])
  })
})
