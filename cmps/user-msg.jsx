const { useState, useEffect, useRef } = React

import { eventBusService } from '../services/event-bus.service.js'
import { utilService } from '../services/util.service.js'

export default function UserMsg() {
    const [msg, setMsg] = useState(null)
    const timeoutIdRef = useRef(null)
    const elMsg = useRef()
    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', msg => {
            setMsg(msg)

            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current)
                timeoutIdRef.current = null
            }

            timeoutIdRef.current = setTimeout(onCloseMsg, 1500)
        })

        return unsubscribe
    }, [])

    useEffect(() => {
        if (elMsg.current) {
            utilService.animateCSS(elMsg.current, 'fadeInDown')
        }
    }, [msg])

    function onCloseMsg() {
        utilService.animateCSS(elMsg.current, 'fadeOutUp')
        setTimeout(() => setMsg(null), 500)
    }

    if (!msg) return <span></span>
    return (
        <div className={'user-msg-modal animate__faster ' + msg.type}>
            {/* <button onClick={onCloseMsg}>X</button> */}
            <span className='user-msg-txt' ref={elMsg}>
                {msg.txt}
            </span>
        </div>
    )
}
