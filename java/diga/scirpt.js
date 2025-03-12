function Main(){
 t=[];
 tombFeltoltes(t);
}
function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a);
}
function tombFeltoltes(t){
for(let i=0;i<20;i++){
    let a=random(1,6);
    let b=random(1,6);
    let s="";
    if(a>b){
        s+=a;
        s+=b;
    }
    else{
        s+=b;
        s+=a
    }
    t.push(s);
}
}
function Megszamlalas(t){
    let db=0;
    for(let i=0;i<t.lenght;i++){
        if(t[i][1]==="1"){
            db++;
        }
    }
}
Main();