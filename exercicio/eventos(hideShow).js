//primeira funcao
function mostrarOcultar() {
    if(test%2!=0) {
        link1.innerHTML = "Mostrar Conteudo"
        conteudo1.remove()
    }else{
        link1.innerHTML = "Ocultar Conteúdo"
        //criei a tag e setei os atributos
        tag = document.createElement('p')
        tag.setAttribute("id","conteudo_1")
        text = document.createTextNode(aux1)
        tag.appendChild(text)
        corpo.insertBefore(tag, corpo.childNodes[2])

        conteudo1 = document.querySelector("#conteudo_1")
        aux1 = conteudo1.textContent
    }
    test++
}

var corpo = document.querySelector("body")

var link1 = document.querySelector("#enlace_1")
link1.onclick = mostrarOcultar
var conteudo1 = document.querySelector("#conteudo_1")
var aux1 = conteudo1.textContent
var test = 1
var tag
var text

//segunda funcao
function mostrarOcultar2() {
    if(test2%2!=0) {
        link2.innerHTML = "Mostrar Conteudo"
        conteudo2.remove()
    }else{
        link2.innerHTML = "Ocultar Conteúdo"
        //criei a tag e setei os atributos
        tag2 = document.createElement('p')
        tag2.setAttribute("id","conteudo_2")
        text2 = document.createTextNode(aux2)
        tag2.appendChild(text2)
        corpo.insertBefore(tag2, corpo.childNodes[8])

        conteudo2 = document.querySelector("#conteudo_2")
        aux2 = conteudo2.textContent
    }
    test2++
}

var link2 = document.querySelector("#enlace_2")
link2.onclick = mostrarOcultar2
var conteudo2 = document.querySelector("#conteudo_2")
var aux2 = conteudo2.textContent
var test2 = 1
var tag2
var text2

//terceira funcao
function mostrarOcultar3() {
    if(test3%2!=0) {
        link3.innerHTML = "Mostrar Conteudo"
        conteudo3.remove()
    }else{
        link3.innerHTML = "Ocultar Conteúdo"
        //criei a tag e setei os atributos
        tag3 = document.createElement('p')
        tag3.setAttribute("id","conteudo_3")
        text3 = document.createTextNode(aux3)
        tag3.appendChild(text3)
        corpo.insertBefore(tag3, corpo.childNodes[14])

        conteudo3 = document.querySelector("#conteudo_3")
        aux3 = conteudo3.textContent
    }
    test3++
}

var link3 = document.querySelector("#enlace_3")
link3.onclick = mostrarOcultar3
var conteudo3 = document.querySelector("#conteudo_3")
var aux3 = conteudo3.textContent
var test3 = 1
var tag3
var text3