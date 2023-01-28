

let c = document.getElementById("button");
c.addEventListener("click",onClick)

function onClick (){
    let d = 10;
    let f = Math.round(d);
    let e = 2.4;
    let g = Math.round(e);
    console.log(d)
    console.log(f)
    console.log(e)
    console.log(g)
    if (d != (Math.round(d))) {
        console.log(true)
    }
    else{
        console.log(false)
    }

    if (e != (Math.round(e))) {
        console.log(true)
    }
    else{
        console.log(false)
    }
    
}
let a = document.getElementById("input");
    let b = +(a.value);
    for (let i = 1; i <= b; i++) {
        for (let j = 1; j <= i; j++) { 
            console.log(i/j);
        }
        console.log("----")
    }