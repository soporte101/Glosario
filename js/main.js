function Glosario(ltr) {
  document.getElementById("ltrrr").innerHTML = ltr;
  document.getElementById("GlosarioDiv").innerHTML = "";

  $.ajax({
    url:
      location.protocol +
      "//" +
      location.host +
      "/_api/web/lists/getbytitle('Glosario')/items?$top=1000&$orderby=Termino_x0020_Desconocido%20asc",
    method: "GET",
    headers: { Accept: "application/json; odata=verbose" },
    success: onSuccessGl,

  });
}

function onSuccessGl(data) {
  var html = "";
  var resultados = data.d.results;
  for (var i = 0; i < resultados.length; i++) {
    if (
      document.getElementById("ltrrr").innerHTML ==
      resultados[i].Termino_x0020_Desconocido.substring(0, 1)
    ) {
      html +=
        "<span class='font-semi-bold'><strong>" +
        resultados[i].Termino_x0020_Desconocido +
        ": </strong></span>" +
        "<span >" +
        resultados[i].Definici_x00f3_n +
        "</span><br/><br/>";
    }
  }
  //alert(html);
  document.getElementById("GlosarioDiv").innerHTML = html;
}
