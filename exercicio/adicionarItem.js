function adicionarItem() {
    let input = document.getElementById("adicionar-item")
    let tag = document.createElement('li')
    let text = document.createTextNode(input.value)
    let elemento = document.querySelector('ul')
    tag.appendChild(text)
    elemento.lastElementChild.appendChild(tag)
}