let c = document.getElementById("button");
c.addEventListener("click",onClick);
let p = document.getElementById("div1");

function onClick (){
    let lista2 = [];
    let a = document.getElementById("input");
    let b = +(a.value);
    for (let i = 1; i <= b; i++) {
        let lista = [];
        for (let j = 1; j <= i; j++) { 
            let o = i/j;
            if (o === (Math.round(o))) {
                lista.push(o);
            }
        }
        console.log(lista);
        console.log(lista.length);
        if (lista.length === 2) {
            lista2.push(i);
        }
        console.log("----");
        p.innerHTML = lista2;
        console.log(lista2);
    }   
}

    