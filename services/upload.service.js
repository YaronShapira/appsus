export const { uploadService } = {
    loadImageFromInput,
    loadAudioFromInput,
}

export function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = event => {
        let img = new Image() // Create a new html img element
        img.src = event.target.result // Set the img src to the img file we read
        img.onload = () => {
            onImageReady(img)
        }
    }

    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}
export function loadAudioFromInput(ev, onAudioReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = event => {
        let audio = new Audio() // Create a new html audio element
        audio.src = event.target.result // Set the audio src to the audio file we read
        onAudioReady(audio)
    }

    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}
