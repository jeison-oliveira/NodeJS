export function toUpper(str){
    return str.toUpperCase();
}

export function createLink(filename){
    return `<a href='/${filename}'>${filename}</a>`;
}

export function createVoltar(){
    return `<a href='/'>Voltar</a><br>`;
}