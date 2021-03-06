// create ma
const map = L.map('mapid').setView([-21.4820604,-56.1533031], 15)

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker) //se existir um marker, sera removido

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

// add photos

function addPhotoField() {
    // catch photos container #images
    const container = document.querySelector('#images')
    // catch duplicating container .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // clone last image add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verify if its null, else don't add to image container 
    const input = newFieldContainer.children[0]
    
    if(input.value == "") { return }
    // reset memory before add image to container
    input.value = ""
    // add duplicate to container #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) { 
        // limpar o valor do campo  
        span.parentNode.children[0].value = ""
        return 
    } 

    // deletar o campo
    span.parentNode.remove()
}

// select yes or no
function toggleSelect(event) {
    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach( (button) => button.classList.remove('active'))
    // colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')
    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    // verificar se sim ou nao
    input.value = button.dataset.value

}

function validate(event) {

    // validar se lat e lng estao preenchidos
    const lat = document.querySelector('input[name="lat"]').value;
    const lng = document.querySelector('input[name="lng"]').value;

    if(lat == "" && lng == "") {
        event.preventDefault();
        alert('Selecione um ponto no mapa');
    }
}