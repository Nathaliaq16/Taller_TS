import { Serie } from "./serie.js";
import { series } from "./data.js";


renderSeriesInTable(series);

const seriesTbody: HTMLElement = document.getElementById("series_id")!; 
console.log(seriesTbody);
function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.season}</td>
                           <td>${c.resumen}</td>
                           <td>${c.linkSerie}</td>
                           <td>${c.imagen}</td>`;
    seriesTbody.appendChild(trElement);
  });
}