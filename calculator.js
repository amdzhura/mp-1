

function addition(){
    let output = document.getElementById("output");
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    first_val = Number(first);
    second_val = Number(second);
    result = first_val + second_val;
    if(result < 0 ){
        output.style.color= output.color;
        output.innerHTML=String(result);
    }else{
        output.innerHTML=String(result);
    }
}

function subtraction(){
    let output = document.getElementById("output");
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    first_val = Number(first);
    second_val = Number(second);
    result = first_val - second_val;
    if(result < 0 ){
        output.style.color= output.color;
        output.innerHTML=String(result);
    }else{
        output.innerHTML=String(result);
    }
}

function multiplication(){
    let output = document.getElementById("output");
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    first_val = Number(first);
    second_val = Number(second);
    result = first_val * second_val;
    if(result < 0 ){
        output.style.color= output.color;
        output.innerHTML=String(result);
    }else{
        output.innerHTML=String(result);
    }
}

function division(){
    let output = document.getElementById("output");
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    first_val = Number(first);
    second_val = Number(second);
    result = first_val / second_val;
    if(result < 0 ){
        output.style.color= output.color;
        output.innerHTML=String(result);
    }else{
        output.innerHTML=String(result);
    }
}

function power(){
    let output = document.getElementById("output");
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    first_val = Number(first);
    second_val = Number(second);
    let result = 1;
    if(second_val == 0){
        output.innerHTML=String("1");
    }
    for(let i = 0; i < second_val; i++){
        result = result * first_val;
    }
    output.innerHTML=String(result);
}

function clearout(){
    let first = document.getElementById("first-number");
    let second = document.getElementById("second-number");
    first.value = "";
    second.value= "";
}