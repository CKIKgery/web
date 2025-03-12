console.log("kapcsolat");


var adatok=["Bela",4.6,1234,"Csilla",4.9,784,"Józsi",4.7,784,"Jani",3.87,1473,"Kata",4.3,1002];

var ossz=0;
var db=0;

for(let i=1;i<adatok.length;i+=3){
    db++;
    ossz+=adatok[i];
    
}
console.log("1",ossz/db);
var i=1;
while(i<adatok.length&&adatok[i]!=5){
    i+=3;
}
console.log("2");
if(i>=adatok.length)

    


var maxi=1;
for(let i=1;i<adatok.length;i+=3){
    if(adatok[i]>adatok[maxi]){
        maxi=i;
    }
}
console.log("3",adatok[maxi-1]);
var mini=2;
for (let i=5;i<adatok.length;i+=3){
    if(adatok[i]<adatok[mini]){
        mini=i;
    }
}
console.log("4",adatok[mini-2]);
db=0;
for (let i=2;i<adatok.length;i+=3){
    if(adatok[i]<1000){
        db++;
    }
}
console.log("5",db)





