import { Prof, Technology } from './helpersTypes';

export function listaProfs(profs: Prof[]) {
  const lista = profs.map((p) => `<li>${p.nome} ${p.sala}</li>`).join('\n');
  return `<ul>${lista}</ul>`;
}

export function getTechnologiesFromNode(techs: Array<Technology>) {
  console.log(techs);
  const lista = techs
    .filter((t) => t.poweredByNodejs)
    .map((t) => `<li>${t.name} - ${t.type}</li>`)
    .join('\n');
  return `<ul>${lista}</ul>`;
}
