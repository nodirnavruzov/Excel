import { capitalize } from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMetodName(listener)
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(`Method ${method}
        is not implemented in ${name} Component`)
      }

      this[method] = this[method].bind(this)
      // Tоже самое addEventListener
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMetodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMetodName(eventName) {
  return 'on' + capitalize(eventName)
}
