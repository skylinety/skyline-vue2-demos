// export function getModules(path, reg = /.*.\.(vue|js|ts|json)$/) {
//   const files = require.context(path, true, reg)
//   let modules = {}
//   files.keys().forEach((key) => {
//     let obj = files(key).default || files(key)
//     modules = { ...modules, [obj.name]: obj }
//   })
//   return modules
// }
export function getModules1() {

}

export const a = 1