function lampadaAcesa() {
    var lamp = document.querySelector('img')
    lamp.setAttribute('src',"lampada_on.gif")
    if (test%2!=0) {
        lamp.setAttribute('src',"lampada_on.gif")
    }else{
        lamp.setAttribute('src',"lampada_off.gif")
    }
    test++
}
let test = 1