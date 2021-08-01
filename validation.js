function number(num){
    let result=document.getElementById("screen");
    result.value+=num;
}

function result(){
    let result=document.getElementById("screen");
    result.value=eval(result.value)

}

function clearResult(){
    let result=document.getElementById("screen");
    result.value="";

}

function deleteChar(){
    let number=document.getElementById("screen");
    let remove=number.value;
    remove=remove.slice(0, -1);
    number.value=remove;
}