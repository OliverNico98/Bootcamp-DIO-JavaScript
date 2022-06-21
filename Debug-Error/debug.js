function validaArray(arr, num){
    try{
        if(!arr && !num) throw ReferenceError("envie os paramentros")

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object.");
    
        if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number.");
    
        if(arr.lenght !== num) throw new RangeError("Tamanho inválido!");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este é um erro do tipo ReferenceError")
            console.log(e.message)
        } else if(e instanceof TypeError){
            console.log("Este é um erro do tipo TyperError")
            console.log(e.message)
        }else if(e instanceof RangeError){
            console.log("Este é um erro do tipo RangeError")
            console.log(e.message)
        } else{
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(validaArray([], 5));