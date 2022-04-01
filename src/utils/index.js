export function getModules(reg) {
  const files = require.context('@/pages', true, reg)
  let modules = {}
  files.keys().forEach((key) => {
    let obj = files(key).default || files(key)
    console.log('index.js第6行:::obj', obj)
    modules = { ...modules, [obj.name]: obj }
  })
  return modules
}

// export const modules = getModules(/.*\.(js|ts)$/)

// export default {
//   modules,
//   getModules,
// }
