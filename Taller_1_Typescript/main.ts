import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series_id")!; 
const avgSerieVar: HTMLElement = document.getElementById("avgSeasons_id")!;
const imagen1: HTMLElement = document.getElementById("primera_imagen")!;

renderSeriesInTable(series);
avgSerieVar.innerHTML = `${getAvgSeasons(series)}`
linkCards(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td><a href = "">${c.name}</a></td>
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

function linkCards(series: Serie[]): void {
  imagen1.setAttribute("src", "N.jpeg");

}
