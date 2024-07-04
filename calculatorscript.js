let display=document.getElementById("display");
let num1=''
let num2=''
let operator=null

function getNumber(number){
    if(operator==null){
        num1+=number
        display.value=num1
    }
    else{
        num2+=number;
        display.value=num2
    }

}
function getOp(oper){
    if(num1==0)
        return;
    if(num2!=0)
        equal();

    operator=oper;
    display.value=''

}

function equal(){
    let total;
    let n1=parseFloat(num1)
    let n2=parseFloat(num2)

    if(isNaN(n1)||isNaN(n2))
        return

    switch(operator){
        case '+':
            total=n1+n2;
            break;
        case '-':
            total=n1-n2;
            break;
        case '*':
            total=n1*n2
            break;
        case '/':
            total=n1/n2;
            break
        default:
            return;
        }
    
        display.value = total;
        num1 = total;
        num2 = '';
        operator = null;
}

function deleteNum() {
    if (operator === null) {
        num1 = num1.toString().slice(0, -1);
        display.value = num1;
    } else {
        num2 = num2.toString().slice(0, -1);
        display.value = num2;
    }
}
function clearFun(){
    display.value=' ';
    num1=' ';
    num2=' ';
    operator=null;
}
function exitFun(){
    window.close()
}