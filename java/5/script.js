

function randomSzam(a,b){
    return Math.floor(Math.random()*(b-a+1)+a)
}

function tombGeneralas(n){
     var t=[];
     for(let i=0;i<n;i++){
        t.push(randomSzam(-10,10))
     }
     return t;
}

function Maxolas(n,cucc){
    var maxi=0;
    for(let i=1;i<n;i++){
        if(cucc[i]>cucc[maxi]){
            maxi=i;
        }
    }
    return maxi+1;
}

function atlagol(n,cucc){
    let s=0;
    for(let i=0;i<n;i++){
        s+=cucc[i];
    }
    return s/n;
}
function Nullazas(n,cucc){
    let i=0;
    while(i<n&&cucc[i]!==0){
        i++;
    }
    return i<n;
}
function main(){
    
    var n=13;
    var cucc= tombGeneralas(n);
    var a=atlagol(n,cucc);
    var maxos=Maxolas(n,cucc)
    var nullas=Nullazas(n,cucc);
    console.log(cucc);
    console.log(a);
    console.log(maxos);
    console.log(nullas);
}
main();


