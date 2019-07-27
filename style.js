
function printReverse(arr){
    for(var i=arr.length-1;i>=0;i--){
        console.log(arr[i]);
    }
   
}

function isUniform(arr){
    var firstvar= arr[0];
    for(var i=1;i<=arr.length-1;i++){
        if(firstvar!==arr[i]){
            return false;
        }
    }
    return true;
}

function sumArray(arr){
    var total=0;
    for(i=0;i<=arr.length-1;i++){
        total+=arr[i]
    }
    return total;
}

function max(arr){
    var max=arr[0];
    for(var i=1;i<=arr.length-1;i++){
        if(max<arr[i]){
           max=arr[i];

        }
      
    }
    return max;
}