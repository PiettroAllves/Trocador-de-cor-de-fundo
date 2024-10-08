function trocarCor(cor) {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = cor
}

function corAleatoria() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function applyColor() {
   const colorInput = document.getElementById('search').value

   trocarCor(colorInput)
}

function selectImage(img) {
    
    const reader = new FileReader()

    reader.onload = function(evento) {
        const urlImg = evento.target.result
        document.body.style.backgroundImage = `url('${urlImg}')`
    } 

    reader.readAsDataURL(img)
}