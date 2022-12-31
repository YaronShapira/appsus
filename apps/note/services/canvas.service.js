export const canvasService = {
    initCanvas,
}

let gElCanvas
let gCtx
let gIsDrawing
let gLastPos

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function initCanvas(canvasElement) {
    canvasElement.classList.add('canvas')
    gElCanvas = canvasElement
    gCtx = gElCanvas.getContext('2d')
    gElCanvas.style.background = '#eee'
    gCtx.lineWidth = 0.5
    gCtx.fillStyle = 'black'
    addListeners()
}
function draw(pos) {
    const { x, y } = pos
    gCtx.lineWidth = 10
    gCtx.lineCap = 'round'
    gCtx.strokeStyle = 'black'
    console.log(x, y)
    // gCtx.lineTo(x, y)
    // gCtx.stroke()
    drawRect(x, y, 20)
}
function drawRect(x, y, size) {
    gCtx.beginPath()
    gCtx.strokeRect(x, y, size, size)
    gCtx.fillRect(x, y, size, size)
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}
function onDown(ev) {
    gIsDrawing = true
    gLastPos = getEvPos(ev)
}

function onMove(ev) {
    if (!gIsDrawing) return

    const pos = getEvPos(ev)
    draw(pos)
}

function onUp() {
    gIsDrawing = false
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function getEvPos(ev) {
    // Gets the offset pos , the default pos
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    // Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
        // console.log('ev:', ev)
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}
