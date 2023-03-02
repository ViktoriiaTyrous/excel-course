console.log('module js');

async function start() {
  return await Promise.resolve('work !');
}
start().then(console.log);
