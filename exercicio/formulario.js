function retornoFormulario() {
    let nome = document.getElementById("nome")
    let telefone = document.getElementById("telefone")
    let dataChegada = document.getElementById("dataChegada")
    let dataSaida = document.getElementById("dataSaida")
    let tipoQuarto = document.getElementById("tipoQuarto")
    let numeroCriancas = document.getElementById("numeroCriancas")
    var valorQuarto
    var soma=0
    var total
    switch (tipoQuarto.value) {
        case "Single":
            valorQuarto = 139
            break;
        case "Double":
            valorQuarto = 220
            break;
        default:
            valorQuarto = 340
            break;
    }
    for(let i=0;i<numeroCriancas.value;i++){
        soma=soma+30
    }
    total = valorQuarto+soma
    alert("Informações :\n"+"Nome: "+nome.value+"\n"+"Telefone: "+
    telefone.value+"\n"+"Data Chegada: "+dataChegada.value+"\n"+
    "Data Saída: "+dataSaida.value+"\n"+"Tipo Quarto: "+tipoQuarto.value+
    "\n"+"Numero Crianças menores de 5: "+numeroCriancas.value+"\n"+
    "Valor total a pagar: "+total)
}