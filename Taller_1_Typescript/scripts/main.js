import { series } from "./data.js";
var seriesTbody = document.getElementById("series_id");
var avgSerieVar = document.getElementById("avgSeasons_id");
renderSeriesInTable(series);
avgSerieVar.innerHTML = "".concat(getAvgSeasons(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.season, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var sumSeason = 0;
    var avgSeason = 0;
    series.forEach(function (serie) { return sumSeason = sumSeason + serie.season; });
    avgSeason = sumSeason / series.length;
    return series.length;
}
