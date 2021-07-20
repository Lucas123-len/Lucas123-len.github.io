function verifica_palavra() {
    let palavra = window.prompt("Entre com uma palavra:")
    let cont=0
    for(var i=0;i<Math.trunc(palavra.length/2);i++){
      if(palavra[i] == palavra[palavra.length-i-1]) {
          cont+=1
      }
    }
    if(cont == Math.trunc(palavra.length/2)){
      window.alert("A palavra é um palíndromo")
    }else{
        window.alert("A palavra não é um palíndromo")
    }
  }
  verifica_palavra()