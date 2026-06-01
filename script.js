
const player =
document.getElementById("audioPlayer");

const titulo =
document.getElementById("titulo");

const cover =
document.getElementById("cover");

const downloadBtn =
document.getElementById("downloadBtn");

function cargarCancion(){

const url =
document.getElementById("urlInput").value;

player.src = url;

titulo.innerText =
"Cargando...";

jsmediatags.read(url, {

onSuccess: function(tag){

titulo.innerText =
tag.tags.title || "Sin título";

if(tag.tags.picture){

let data =
tag.tags.picture.data;

let format =
tag.tags.picture.format;

let byteArray =
new Uint8Array(data);

let blob =
new Blob([byteArray],
{type: format});

let imageUrl =
URL.createObjectURL(blob);

cover.src = imageUrl;
}

},

onError: function(error){

titulo.innerText =
"Archivo cargado";

console.log(error);

}

});

downloadBtn.onclick = function(){

const a =
document.createElement("a");

a.href = url;

a.download = "";

document.body.appendChild(a);

a.click();

document.body.removeChild(a);

};

}
