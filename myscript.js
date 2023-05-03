// Capture element of time

let time = document.querySelector('#time');



let myDisplay = document.querySelector('#time');

setInterval(function(){
    const date  = new Date();
    const hours = date.getHours().toString().padStart(2,'0');
    const minut = date.getMinutes().toString().padStart(2,'0');
    const seco = date.getSeconds().toString().padStart(2,'0');

    myDisplay.textContent = ` **[ Today time ${hours}:${minut}:${seco} **]`;0
},1000);

//console.log(time);


// hellow

function alertLogin(){
    let username = document.getElementById("username").value;

    let Password = document.getElementById("Password").value;

    if(username ==="" & Password ===""){
        alert("Enter Username and Password First");
    }else{

    alert(`username ${username} or password ${Password} is incorrect`);
    }

}

/* let username = document.getElementById("username").value;

let Password = document.getElementById("Password").value;

console.log(username);

console.log(Password); */

// hellow



let bodi = document.querySelector('body');

let btns = document.querySelector('#black');

let blocks = document.querySelectorAll('div');

let v = document.querySelector('.cv');

let table = document.querySelector('table');

let th = document.querySelectorAll('th');

let td = document.querySelectorAll('td');

let vc = document.querySelector('.cv-center');


btns.addEventListener('click',function(){
    bodi.style.color = 'white';
    bodi.style.backgroundColor = 'black';
    v.style.backgroundColor = 'black';
    vc.style.backgroundColor = 'black';
    vc.style.color = 'white';
    table.style.border = '1px solid white';
    whitebtn.style.color = 'black';
    whitebtn.style.backgroundColor = 'white';
    //td.style.border = '1px solid white';
    //th.style.border = '1px solid white';
    myDisplay.style.color = 'black';
    v.style.color = 'white';

    for(let x = 0; x < th.length; x++){
        let tableHead = th[x];
        tableHead.style.border = '1px solid white';
    }

    for(let x = 0; x < td.length; x++){
        let tableData = td[x];
        tableData.style.border = '1px solid white';
    }
});



let whitebtn = document.querySelector('#white');

whitebtn.addEventListener('click',function(){
    bodi.style.color = 'black';
    bodi.style.backgroundColor = 'white';
    v.style.backgroundColor = 'white';
    vc.style.backgroundColor = 'white';
    vc.style.color = 'black';
    whitebtn.style.color = 'black';
    table.style.border = '1px solid black';

    for(let y = 0; y < th.length; y++){
        let tableHead = th[y];

        tableHead.style.border = '1px solid black';
    }

    for(let y = 0; y < td.length; y++){
        let tableData = td[y];

        tableData.style.border = '1px solid black';
    }
});






