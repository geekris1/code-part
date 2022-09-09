import obj from './data/get:obj.js'

function get(obj, key) {
  key = key.replace(/\[(\S+)\]/g, '.$1').split('.')
  let value = obj;
  for (let v of key) {
    value = value[v]
  }
  return value
}

console.log(get(obj, 'a.name'))
console.log(get(obj, 'b[1]'))
console.log(get(obj, 'c.d[0].e.name'))
