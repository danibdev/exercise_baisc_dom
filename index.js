const h1 = document.querySelector("h1")

const p = document.getElementById("parrafo")

const input_uno = document.getElementById("calculo1")

const input_dos = document.getElementById("calculo2")

const resultado = document.getElementById("resultado")

const btn_calcular = document.getElementById("btn_calcular")

// Formulario
const form = document.querySelector('#form')

const resultado_form = document.querySelector("#resultado_form")

const input_uno_form = document.querySelector("#calculo1_form")

const input_dos_form = document.querySelector("#calculo2_form")

// escuchar evento
btn_calcular.addEventListener("click", sumar)

form.addEventListener("submit", sumar_form)




h1.innerHTML = "hola mundo"

h1.classList.add("azul")

const img = document.createElement("img")
img.setAttribute('src', 'https://images.ecestaticos.com/v0eGd1XE00Py6WpAlaSHQtNjI7k=/0x170:4996x2975/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ff40%2F6c1%2F598%2Ff406c15986bdca4637c68045c0922922.jpg')

p.append(img)


function sumar() {
    let result = parseInt(input_uno.value) + parseInt(input_dos.value)

    resultado.innerHTML = `<p>resultado: ${result}<\p>`
}

function restar() {
    let result = parseInt(input_uno.value) - parseInt(input_dos.value)

    resultado.innerHTML = `<p>resultado: ${result}<\p>`
}



function sumar_form(event) {
    // detener regarcca de la pagina por envio de formulario
    event.preventDefault()
    let result = parseInt(input_uno_form.value) + parseInt(input_dos_form.value)

    resultado_form.innerHTML = `<p>resultado: ${result}<\p>`
}