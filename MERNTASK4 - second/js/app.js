var array1 = ["book", "pen", "eraser"];
var array2 = ["pencil", "marker"];
function customConcat(array1, array2){
    var array=[];
    array1.forEach(element => {
        array.push(element);
    });
    array2.forEach(element=>{
        array.push(element);
    });
    return array;
    }
console.log(customConcat(  ["book", "pen", "eraser"], ["pencil", "marker"]))