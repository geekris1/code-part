import obj from './data/get:obj.js'

function get(obj, key) {
  return new Function("obj", `return obj.${key}`)(obj, key)
}

console.log(get(obj, 'a.name'))
console.log(get(obj, 'b[1]'))
console.log(get(obj, 'c.d[0].e.name'))


