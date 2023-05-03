
function saveData(){
    let names = document.getElementById("name").value;

    let address = document.getElementById("address").value;

    let email = document.getElementById("email").value;

    let comment = document.getElementById("comm").value;

    localStorage.setItem("jina",names);
    localStorage.setItem("mtaa", address);
    localStorage.setItem("pepe", email);
    localStorage.setItem("maoni", comment);
}



let majina = document.querySelector('#jina');

let anuan = document.querySelector('#anuani');

let bpepe = document.querySelector('#emali');

let maonii = document.querySelector('#comenti');

// Retrieve data from local storage

let one  = localStorage.getItem("jina");

let two = localStorage.getItem("maoni");

let three = localStorage.getItem("pepe");

let four = localStorage.getItem("mtaa");


if(one && two ){
    if(three && four){
        majina.innerHTML = `<span> Name:</span> ${one}`;
        anuan.innerHTML = `<span> Address:</span> ${four}`;
        bpepe.innerHTML = `<span> Email:</span> ${three}`;
        maonii.innerHTML = `<span> Comment:</span> ${two}`;
    }
}

window.addEventListener("storage", function(){

    let one  = localStorage.getItem("jina");

    let two = localStorage.getItem("maoni");

    let three = localStorage.getItem("pepe");

    let four = localStorage.getItem("mtaa");

    if(one && two ){
        if(three && four){
            majina.innerHTML = `${one}`;
            anuan.innerHTML = `${four}`;
            bpepe.innerHTML = `${three}`;
            maonii.innerHTML = `${two}`;
        }
    }
});

/* console.log(majina);

console.log(anuan);

console.log(bpepe);

console.log(maonii); */

