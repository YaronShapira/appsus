export const canvasService = {
    initCanvas,
    getCanvasDataURL,
    hideCanvas,
}

let gElCanvas
let gCtx
let gIsDrawing
let gLastPos

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function initCanvas(canvasElement, canvasImageURL = '') {
    canvasElement.classList.add('canvas')
    gElCanvas = canvasElement
    gCtx = gElCanvas.getContext('2d')
    // SIZING
    canvasElement.style.width = '100%'
    canvasElement.style.height = '100%'
    canvasElement.width = canvasElement.offsetWidth
    canvasElement.height = canvasElement.offsetHeight

    gElCanvas.style.background = '#eee'
    gCtx.fillStyle = 'black'
    gCtx.lineWidth = 3
    gCtx.lineCap = 'round'
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    addListeners()

    if (canvasImageURL) {
        let img = new Image() // Create a new html img element
        img.src = canvasImageURL // Set the img src
        img.onload = () => {
            renderImg(img)
        }
    } else {
        // WHITE BG
        gCtx.fillRect(0, 0, canvasElement.width, canvasElement.height)
    }
}

function renderImg(img) {
    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function getCanvasDataURL() {
    return gElCanvas.toDataURL(`image/png`)
}

function hideCanvas() {
    gElCanvas.style.width = '0'
    gElCanvas.style.height = '0'
    gElCanvas.width = gElCanvas.offsetWidth
    gElCanvas.height = gElCanvas.offsetHeight
}
function draw(pos) {
    const { x, y } = pos
    gCtx.lineTo(x, y)
    gCtx.stroke()
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
    gCtx.beginPath()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
    gElCanvas.addEventListener('mouseout', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
    gElCanvas.addEventListener('touchcancel', onUp)
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
