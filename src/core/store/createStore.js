export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({ ...initialState }, { type: '__INIT__' })
  let listners = []

  return {
    subscribe(fn) {
      listners.push(fn)
      return {
        unsubscribe() {
          listners = listners.filter(l => l !== fn)
        },
      }
    },
    dispatch(action) {
      state = rootReducer(state, action)
      listners.forEach(listner => listner(state))
    },
    getState() {
      return JSON.parse(JSON.stringify(state))
    },
  }
}
