function matrixFeltoltes(n,m){
    let matrix=[];
    for (let i=0;i<n;i++){
        let st=[];
        
        for(let j=0;j<m;j++){
            let c=Math.random();
            if (c<0.5){
                st.push(1);
            }
            else{
                st.push(0);
            }
            
            
        }
        matrix.push(st);

    }
    return matrix;
}

function szamolas(matrix,n,m,x,y){
    let db1=0;
    let db2=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j]==x){
                db1++;
            }
            else if(matrix[i][j]==y){
                db2++;
            }
            
        }
    }
    
    console.log(db1);
    console.log(db2);
}


function Main(){
    // let matrix= [[]];
    // matrix.push(2,3,3,4,5);
    // console.log(matrix);
    let n=5;
    let m=6;
    let x=0;
    let y=1;
    let matrix= matrixFeltoltes(n,m);
    console.log(matrix);
    szamolas(matrix,n,m,x,y);

}

Main();