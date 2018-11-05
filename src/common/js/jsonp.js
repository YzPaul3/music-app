import jsonp1 from 'jsonp'

export default function jsonp (url, data, options) {
  url += (url.indexOf('?') > -1 ? '&' : '?') + query(data)
  return new Promise((resolve, reject) => {
    jsonp1(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function query (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  console.log(url)
  return url ? url.substring(1) : ''
}
