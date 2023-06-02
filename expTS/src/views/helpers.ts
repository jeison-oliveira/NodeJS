import { Prof } from './helpersTypes';

export function listaProfs(profs: Prof[]) {
  const lista = profs.map((p) => `<li>${p.nome} ${p.sala}</li>`).join('\n');
  return `<ul>${lista}</ul>`;
}
