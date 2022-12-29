export default function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = event => {
        let img = new Image() // Create a new html img element
        img.src = event.target.result // Set the img src to the img file we read
        // Run the callBack func, To render the img on the canvas
        img.onload = () => {
            onImageReady(img)
        }
    }

    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}