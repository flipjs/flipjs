module.exports = {
  openLink: openLink,
  isEmpty: isEmpty,
  capitalize: capitalize,
  iSFound: iSFound
}

function openLink (link) {
  window.open(link, '_blank', 'toolbar=0,status=0,width=1024,height=768')
}

function isEmpty (obj) {
  if (obj == null) return true
  if (obj.length > 0) return false
  if (obj.length === 0) return true

  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false
  }
  return true
}

function capitalize (string) {
  if (!string) return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function iSFound (obj, searchString) {
  return Object.keys(obj).some((item) => {
    if (obj[item]) {
      const str = obj[item].toString().toLowerCase()
      const search = searchString.toLowerCase()
      return (str.indexOf(search) !== -1)
    }
    return false
  })
}
