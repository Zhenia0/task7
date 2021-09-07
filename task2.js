let sumNumbs = function(a , b){
    return a + b;
}

function determinateName (name){
    return 'Привет ' + name;
}

let calcTypeArg = function(first, second, third){
   return[typeof first, typeof second, typeof third]
}

function selectEvenNumbs(arr){
    let arr2 = []; 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(sumNumbs(1, 2));
console.log(determinateName('Тургут'));
console.log(calcTypeArg(true, "Ye", 1));
console.log(selectEvenNumbs([1, 2, 3, 4, 5]));