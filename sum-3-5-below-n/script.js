
// Fist Solution 

function multipliesSum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        if(i%3==0){
            if(i%5==0){
                    sum+=i;
            }else{

                sum+=i;
            }

            
            
        }

        else if(i%5==0){
               sum+=i;
            }
           
    }


    


    return sum;
}


console.log(multipliesSum(10))