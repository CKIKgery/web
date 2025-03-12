var t=[];

for(let i=0;i<10;i++)
{
    var db=Math.floor(Math.random()*6+1);
    t.push(db);
    for(let j=0;j<db;j++)
    {
        var d1=Math.floor(Math.random()*26+11);
        t.push(d1);
        

    }
    
}
console.log(t);


var ossz=0;

var t2=[];

for(let i=0;i<=t.length;i++)
{
    let darab=t[i];
        ossz=0;

    for(let j=i+1;j<i+darab;j++){
        ossz+=t[i]
    }

t2.push(ossz/darab);
console.log(ossz/darab);
i+=darab;

}


var maxi=0;
for(let i=1;i<t2.length;i++){
    if(t2[maxi]<t2[i]){
        maxi=i;
    }
}

console.log(maxi+1);

