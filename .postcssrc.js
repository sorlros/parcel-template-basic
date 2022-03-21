//Common JS

//import autoprefixer from 'autoprefixer'
//const autoprefixer = require('autoprefixer')

//export {
//   plugins: [
//     autoprefixer
//   ]
// }

// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

module.exports = {
  // parser: "postcss-scss",
  plugins: [
    require('autoprefixer'),
    require('postcss-fail-on-warn')
  ]
}