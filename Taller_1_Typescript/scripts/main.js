import { series } from "./data.js";
renderSeriesInTable(series);
var seriesTbody = document.getElementById("series_id");
console.log(seriesTbody);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.season, "</td>\n                           <td>").concat(c.resumen, "</td>\n                           <td>").concat(c.linkSerie, "</td>\n                           <td>").concat(c.imagen, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
