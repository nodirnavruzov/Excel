/* eslint-disable no-invalid-this */
export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
  // prettier-ignore
  if (start > end) {
    [end, start] = [start, end]
  }
  return new Array(end - start + 1).fill('').map((_, index) => start + index)
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  localStorage.setItem(key, JSON.stringify(data))
}
export function isEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  return a === b
}

export function camelToDashCase(str) {
  return str.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)
}
// prettier-ignore
export function toInlineStyles(styles = {}) {
  return Object.keys(styles)
      .map(key => `${camelToDashCase(key)}:${styles[key]}`)
      .join(';')
}

export function debounce(fn, wait) {
  let timeout
  // prettier-ignore

  return function(...args) {
    const later = () => {
      clearTimeout(timeout)
      fn.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
