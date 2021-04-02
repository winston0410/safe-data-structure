import { Stack } from '@datastructures-js/stack';
import MyStack from '../src/index'
const { Benchmark } = require('benchmark')
const suite = new Benchmark.Suite()

const runBenchmark = () => {
  const stack = new Stack()
  const myStack = new MyStack()

  suite.add('data-structure:push()', function () {
    stack.push('hello')
  })

  suite.add('my-stack:push()', function () {
    myStack.push('hello')
  })

  // suite.add('data-structure:pop()', function () {
  //   stack.pop()
  // })

  // suite.add('my-stack:pop()', function () {
  //   myStack.pop()
  // })

  suite.on('cycle', function (event) {
  	if (event.target.error) {
  		console.log(event.error)
  	}
  	console.log(String(event.target))
  })

  suite.on('complete', function () {
  	console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })

  suite.run()
}

export default runBenchmark
