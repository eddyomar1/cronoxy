
var b = document.getElementById("b");
var b2 = document.getElementById("b2");

var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");

var array_temporal = [];
var vt = 0;
var vtt = 0;

var dur = 0;

// var days;
// var hs;
// var til;

////////////// var ppp = "1252,1066,84";
////////////// ppp.replace(/"/g,"");

////////////// if(ppp==[1252,1066,84]){
////////////// console.log("si");
////////////// }else{console.log("no");}

var dz = localStorage.getItem("days_d");
var hz = localStorage.getItem("hs_d");
var tz = localStorage.getItem("til_d");

var days = [];
var hs = [];
var til = [];

// let fin = [];
let arr = [hz.replace(/"/g,"")];
arr.forEach(element => {//Para cada valor del array
    element.split(",").forEach(elm => {//Lo divido en 2 por la coma y para cada uno de los resultados
        hs.push(parseFloat(elm));//LO meto en el array fin haciéndole un parse a float para evitar comillas
    });
});
console.log(hs);


let arra = [dz.replace(/"/g,"")];
arra.forEach(element => {//Para cada valor del array
    element.split(",").forEach(elm => {//Lo divido en 2 por la coma y para cada uno de los resultados
        days.push(parseFloat(elm));//LO meto en el array fin haciéndole un parse a float para evitar comillas
    });
});
console.log(days);

let arre = [tz.replace(/"/g,"")];
arre.forEach(element => {//Para cada valor del array
    element.split(",").forEach(elm => {//Lo divido en 2 por la coma y para cada uno de los resultados
        til.push(parseFloat(elm));//LO meto en el array fin haciéndole un parse a float para evitar comillas
    });
});
console.log(til);





// console.log(hz.replace(/"/g,""));

// console.log(hzdz.replace(/"/g,""));
// console.log(tzdz.replace(/"/g,""));


//days.push(dz.replace(/"/g,""));
//hs.push(hz.replace(/"/g,""));
//til.push(tz.replace(/"/g,""));

//console.log(days);
//console.log(hs);
//console.log(tis);

///////// //codigo de stackoverflow
///////// let fin = [];
///////// let arr = ["1.1,0.1", "13.5,5.4", "5.0,1.0"];
///////// arr.forEach(element => {//Para cada valor del array
/////////     element.split(",").forEach(elm => {//Lo divido en 2 por la coma y para cada uno de los resultados
/////////         fin.push(parseFloat(elm));//LO meto en el array fin haciéndole un parse a float para evitar comillas
/////////     });
///////// });
///////// console.log(fin);



// // verificacion de los datos en localStorage y si no existen se crean
// if(localStorage.getItem("days") == null){
//     localStorage.setItem("days", JSON.stringify(days));
// }
// if(localStorage.getItem("hs") == null){
//     localStorage.setItem("hs", JSON.stringify(hs));

//     localStorage.setItem("til", JSON.stringify(til));
// }


// if(localStorage.getItem('days_d')){


//     days = [3,4];
//     hs= [27900,27900];
//     til= [1252,1066];
    
    
//     localStorage.setItem("days_d", days);
//     localStorage.setItem("hs_d", hs);
//     localStorage.setItem("til_d", til);   

// }else{

    
//     days = localStorage.getItem("days_d");
//      hs = localStorage.getItem("hs_d");
//      til = localStorage.getItem("til_d");
     


// }


var s1 = 0;
var s2 = 0;

var time= new Date();
var d;
var h;
var m;
var s;


var contador = setInterval(()=>{
time= new Date();
d = time.getDay();
h = time.getHours();
m = time.getMinutes();
s = time.getSeconds();

//mostrar loa hora, minutos y segundos en el h1 con el id t
document.getElementById("t").innerHTML = h+":"+m+":"+s;

},100);



b.addEventListener("click", ()=>{

document.getElementById("t2").innerHTML = h+":"+m+":"+s;
document.getElementById("b").style.display = "none";
document.getElementById("b2").style.display = "block";
s1 = (h*60*60)+(m*60)+s;
days.push(d);
hs.push(s1);

localStorage.setItem("days_d", days);
localStorage.setItem("hs_d", hs);


var y=1;
for(var x=0; x<til.length; x++){
    

    vtt += til[x];


    if(days[x]==d){
    // array_temporal.push(days[x]);
    vt += til[x];
    y++;
    }

}
vt/=y;
vtt/=til.length;

t4.innerHTML = "total: "+(vtt/60)+" minutos";
t5.innerHTML = "dia: "+(vt/60)+" minutos";

console.log(til);
console.log(days);

});


b2.addEventListener("click", ()=>{

document.getElementById("t3").innerHTML = h+":"+m+":"+s;
document.getElementById("b2").style.display = "none";
document.getElementById("b").style.display = "block";
s2 = (h*60*60)+(m*60)+s;


dur = s2 - s1; 
// console.log(s2-s1);  
// days.push(d);
til.push(dur);
localStorage.setItem("til_d", til);
// console.log(s2);
// console.log(s1);

});

