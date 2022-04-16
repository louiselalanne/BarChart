var vencedor = " ";
onEvent("CasaOP", "input", function( ) {
  vencedor = getProperty("CasaOP", "value");
  console.log(vencedor);
});
onEvent("esportesCasa", "click", function( ) {
  setScreen("telaMensagem");
  setText("etiquetaMensagem", vencedor+" venceu uma medalha em esportes");
  setTimeout(function() {
    setScreen("teladeExibição");
  }, 4000);
  readRecords("HouseNames", {"HouseNames": vencedor}, function(records) {
    var temp = {};
    temp.id = records[0].id;
    temp.HouseNames = records[0].HouseNames;
    temp.Arts = records[0].Arts;
    temp.Sports = records[0].Sports + 1;
    temp.Total = records[0].Total +1;
    updateRecord("Houses", temp);
  });
});
var opc = {};
opc.colors = "green";
onEvent("esportesExi", "click", function( ) {
  opc.title = "Esportes";
  drawChartFromRecords("grafico1", "bar", "Houses", ["HouseNames", "Sports"], opc);
});
onEvent("artesCasa", "click", function( ) {
  setScreen("telaMensagem");
  setText("etiquetaMensagem", vencedor+" venceu uma medalha em artes");
  setTimeout(function() {
    setScreen("teladeExibição");
  }, 4000);
  readRecords("HouseNames", {"HouseNames": vencedor}, function(records) {
    var temp = {};
    temp.id = records[0].id;
    temp.HouseNames = records[0].HouseNames;
    temp.Sports = (records[0]).Sports;
    temp.Arts = records[0].Arts+1;
    temp.Total = records[0].Total +1;
    updateRecord("Houses", temp);
  });
});
onEvent("artesExi", "click", function( ) {
  opc.title = "Artes";
  drawChartFromRecords("grafico1", "bar", "HouseNames", ["HouseNames", "Arts"], opc);
});
onEvent("esportesExi", "click", function( ) {
  opc.title = "Esportes";
  drawChartFromRecords("grafico1", "bar", "HouseNames", ["HouseNames", "Sports"], opc);
});
onEvent("tot", "click", function( ) {
  opc.title = "Medalhas Totais";
  drawChartFromRecords("grafico1", "bar", "HouseNames", ["HouseNames", "Total"], opc);
});
