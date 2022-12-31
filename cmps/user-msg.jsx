const { useState, useEffect, useRef } = React

import { eventBusService } from '../services/event-bus.service.js'
import { utilService } from '../services/util.service.js'

export default function UserMsg() {
  const [msg, setMsg] = useState(null)
  const timeoutIdRef = useRef(null)
  const messageCmp = useRef()
  useEffect(() => {
    const unsubscribe = eventBusService.on('show-user-msg', (msg) => {
      setMsg(msg)

      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
        timeoutIdRef.current = null
      }

      timeoutIdRef.current = setTimeout(onCloseMsg, 3000)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    if (messageCmp.current) {
      utilService.animateCSS(messageCmp.current, 'fadeInDown')
    }
  }, [msg])

  function onCloseMsg() {
    utilService.animateCSS(messageCmp.current, 'fadeOutDown')
    setTimeout(() => setMsg(null), 500)
  }

  if (!msg) return <span></span>
  return (
    <div className={'user-msg-modal ' + msg.type} ref={messageCmp}>
      {/* <button onClick={onCloseMsg}>X</button> */}
      {msg.txt}
    </div>
  )
}
