function beli(){

alert(
"Produk berhasil ditambahkan ke keranjang!"
)

}


document
.getElementById("search")

.addEventListener(
"keyup",

function(){

let cari=
this.value.toLowerCase()

let card=
document.querySelectorAll(".card")


card.forEach(
(function(item){

let teks=
item.innerText.toLowerCase()

item.style.display=

teks.includes(cari)

? "block"

: "none"

})

)

}

)