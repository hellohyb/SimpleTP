export default function dispatchEventStroage () {
    //重写localstorage方法
    const signSetItem = localStorage.setItem
    localStorage.setItem = function (key, val) {
      let setEvent: any = new Event('setItemEvent')
      setEvent.key = key
      setEvent.newValue = val
      window.dispatchEvent(setEvent)
      signSetItem.apply(this, arguments)
    }
  }
  