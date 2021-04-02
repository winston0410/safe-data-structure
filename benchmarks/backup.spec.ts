import Benchmark from 'benchmark';
import Table from 'cli-table';
import ora from 'ora';
import { Stack } from '@datastructures-js/stack';
import MyStack from '../src/index'

const showResults = (benchmarkResults) => {
  const table = new Table({
    head: ['Name', 'Ops / sec', 'Relative margin of error', 'Sample size']
  });

  benchmarkResults.forEach((result) => {
    const name = result.target.name;
    const opsPerSecond = result.target.hz.toLocaleString('en-US', {
      maximumFractionDigits: 0
    });
    const relativeMarginOferror = `± ${result.target.stats.rme.toFixed(2)}%`;
    const sampleSize = result.target.stats.sample.length;

    table.push([name, opsPerSecond, relativeMarginOferror, sampleSize]);
  });

  console.log(table.toString()); // eslint-disable-line no-console
};

const sortDescResults = (benchmarkResults) => {
  return benchmarkResults.sort((a, b) => {
    return a.target.hz < b.target.hz ? 1 : -1;
  });
};

const spinner = ora('Running benchmark ');

let results = [];

const onCycle = (event) => {
  results.push(event);
  ora(event.target.name).succeed();
};

const onComplete = () => {
  spinner.stop();

  const orderedBenchmarkResults = sortDescResults(results);

  showResults(orderedBenchmarkResults);
};

const runBenchmark = () => {
  const suite = new Benchmark.Suite('');

  return new Promise((resolve) => {
    suite
	    .add('@datastructures-js:construct', () => {
        const stack = new Stack([1, 2, 3, 4, 5])
	    })
      .add('my stack:construct', () => {
        const stack = new MyStack(...[1, 2, 3, 4, 5])
      })
      .add('@datastructures-js:push', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        stack.push(5)
      })
      .add('my stack:push', () => {
        const stack = new MyStack()
        stack.push(...[1, 2, 3, 4, 5])
      })
      .on('start', () => {
        console.log(''); // eslint-disable-line no-console
        console.log('Starting cycles for functions with a single primitive parameter...'); // eslint-disable-line no-console

        results = [];

        spinner.start();
      })
      .on('cycle', onCycle)
      .on('complete', () => {
        onComplete();
        resolve('');
      })
      .run({
        async: true
      });
  });
}

runBenchmark()
