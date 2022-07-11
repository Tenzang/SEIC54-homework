// function 
    //two arguments(Arrays)
        //only numbers


const Array1 = function(array1,array2){
    for(let i = 0; i < array1.length; i++){
        let total = 0;
            total = array1.reduce((a,b) => a + b)
            return total 
    }   
    
}

const Array2 = function(array1,array2){
    for(let i = 0; i < array2.length; i++){
        let total = 0
            total = array2.reduce((a,b) => a + b)
            return total
    }
}   
    

const sumOfArrays = function(array1,array2){
    let total0 = 0;
    let total1 = 0;
    for(let i = 0; i < array1.length; i++){
        total0 = array1.reduce((a,b) => a + b)
    }
    for(let i = 0; i < array2.length; i++){
        total1 = array2.reduce((a,b) => a + b)
    }
    return total0 += total1
}

const sumOfArrays2 = function(){
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] >= 1){
            console.log(arguments)
        }
    }
}


sumOfArrays2([2, 6.4, 3],[3, 3.6, 2],[2, 6.4, 3],[3, 3.6, 2])


console.log(sumOfArrays([2, 6.4, 3],[3, 3.6, 2]))

