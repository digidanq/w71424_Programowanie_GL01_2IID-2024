
 var var1 = "var";
 let let1 = "let";
 const conat1 = "const";

// if (var1 == "var" && var1 == "var" || let1 == " let"){
//     var var2 = "var2"; let let2 = "let2";
// } 

// console.log(var2);


// while(var1 != "var"){

// }

// do{
    
// }
// while(var1 != "var")

// for(let i = 0; i < 100; i+= 2);
// {
//     console.log(i);
// }

// const element = document.getElementById('text');
// element.innerHTML = "Text";

// function handeleClick(){
//     console.log("click");
//     const v = prompt("Podaj wartość");
//     alert('Test $(v)');

// }

function pokazAlert(){
    alert("Witaj na mojej stronie!");
}


function zadanie2(){
    for(let i = 0; i<= 100; i++);{
        if(i % 2 === 0);{
            console.log(i);
        }
    }
}

function zadanie3(){
    const a = parseInt(prompt("Podaj pięrwszą liczbę całkowitą: "));
    const b = parseInt(prompt("Podaj drugą liczbę całkowitą: "));
    alert("Suma: " + (a + b));
}


function pokazCzas(){
    const teraz = new Date();
    document.getElementById("czas").innerText = teraz.toLocaleTimeString();
}
setInterval(pokazCzas, 1000);





