console.log("Hello Parcel")

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()
// babel은 비동기문법인 async와 await를 사용하기 위해서 npm i -D @babel/plugin-transform-runtime
// 이후 .babelrc.js에서 설정을 해야한다