function TempoTranscorrido(){
  var dataInformada = window.prompt("Informe uma data:")
  var anoInformado = new Date(dataInformada)
  var anoAtual = new Date()
  var dias1 = (365/12)*(anoInformado.getMonth()+1)+anoInformado.getDate()
  var dias2 = (365/12)*(anoAtual.getMonth()+1)+anoAtual.getDate()
  dias1 = Math.round(dias1)
  dias2 = Math.round(dias2)
  var ano = anoAtual.getFullYear()-anoInformado.getFullYear()
  var mes=0
  var dias3=0
  if(anoInformado.getFullYear() > "2021"){
    alert("Passaram-se 0 anos, 0 meses e 0 dias da data informada")
  }else{
    if (dias1>dias2) {
      ano=ano-1
      mes=365-(dias1-dias2)
      if(mes>30){
        dias3=mes%30
        mes= Math.round(mes/30)
      }
    }else if (dias1<dias2){
      mes=dias2-dias1
      if(mes>30){
        dias3=mes%30
        mes= Math.trunc(mes/30)
      }else{
        dias3=mes
        mes=0
      }
    }
    alert("Passaram-se "+ano+" anos e "+mes+" meses e "+dias3+" dias")
  }
}
TempoTranscorrido()