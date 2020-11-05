import { DomListener } from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []

    this.prepare()
  }

  // Настраеваем наш компонент до init
  prepare() {}

  // Возвращает шаблон компоента
  toHTML() {
    return ''
  }

  // Уведомяем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  // сюда приходят только изменеия по тем полям на которых мы подписались
  storeChanged() {}

  isWotching(key) {
    return this.subscribe.includes(key)
  }

  // инициализируем компонент
  // Добавляем DOM слушателей
  init() {
    this.initDOMListeners()
  }

  // Удаляем компонент
  // Чистим слушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
