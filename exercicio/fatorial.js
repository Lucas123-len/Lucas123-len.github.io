function fatorial_numero() {
    let numero = window.prompt("Insira um número")
    let fatorial = 1
    for(var i=0;i<numero;i++){
      fatorial = fatorial * (numero-i)
    }
    alert("O fatorial do numero digitado é: "+fatorial)
  }
fatorial_numero()