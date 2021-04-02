const Stack = (function(){
  const privates = new WeakMap();

  function Stack(...items): void{
    if (!(this instanceof Stack)) return new Stack(...items);

    const initialState = {
      stack: [],
      head: null,
      length: 0
    }

    privates.set(this, initialState)

    Reflect.defineProperty(this, "length", {
      get: this.size
    });

    Reflect.defineProperty(this, "head", {
      get: this.peek
    });

    if(items.length > 0){
      this.push(...items)
    }
  }

  Stack.prototype.push = function (...items){
    const _ = privates.get(this)
    _.stack.push(...items)
    _.head = _.stack[_.stack.length - 1]
    _.length += items.length
    return this
  }

  Stack.prototype.pop = function (){
    const _ = privates.get(this)
    _.stack.pop()
    _.head = _.stack[_.stack.length - 1]
    _.length --
    return this
  }

  Stack.prototype.peek = function (){
    const _ = privates.get(this)
    return _.head
  }

  Stack.prototype.size = function (){
    const _ = privates.get(this)
    return _.length
  }

  Stack.prototype.isEmpty = function (){
    const _ = privates.get(this)
    return _.length === 0
  }

  Stack.prototype.clear = function (){
    const _ = privates.get(this)
    _.head = null
    _.length = 0
    _.stack = []
    return this
  }

  Stack.prototype.map = function (cb){
    const _ = privates.get(this)
    const transformed = _.stack.map(cb)
    return new Stack(...transformed)
  }

  Stack.prototype.clone = function (){
    const _ = privates.get(this)
    return new Stack(..._.stack)
  }

  Stack.prototype.toArray = function (){
    const _ = privates.get(this)
    return _.stack.slice()
  }

  return Stack
})()

export default Stack
