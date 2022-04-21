import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series_id")!; 
const avgSerieVar: HTMLElement = document.getElementById("avgSeasons_id")!;

renderSeriesInTable(series);
avgSerieVar.innerHTML = `${getAvgSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.season}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAvgSeasons(series: Serie[]): number {
    let sumSeason: number = 0;
    let avgSeason: number = 0;
    series.forEach((serie) => sumSeason = sumSeason + serie.season);
    avgSeason = sumSeason / series.length;
    return series.length;
}
