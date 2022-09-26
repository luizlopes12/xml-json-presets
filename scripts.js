/* importando o json */
import json from './texts.json' assert {type: 'json'};
/* importando o xml e colocando a lista na variavel textsArray*/
let textsArray;
await fetch('./texts.xml')
.then(response => response.text())
.then(xml => {
    let xmlContent = xml;

    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
    let texts = xmlDOM.querySelectorAll('lbl');
    textsArray = texts
})
/*Mostra o conteúdo do xml*/
textsArray.forEach(txt => console.log(txt.innerHTML.replace(/\s+/g, '')))
/*Mostra o conteúdo do json*/
console.log(json.bomdia)
console.log(json.boatarde)
console.log(json.boanoite)

// console.log(textsArray)
// /* selecionando html e inserindo os textos */

// let divsXml = document.querySelectorAll('#xml [data-text]')
// divsXml.forEach(div =>{
//     if(div.dataset.text == textsArray)
// })
// console.log(divsXml)