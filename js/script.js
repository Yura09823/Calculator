$("#BtnPowerX").hide(0);
$("#BtnLg").hide(0);
$("#Btnln").hide(0);
$("#BtnBracketLeft").hide(0);
$("#BtnBracketRight").hide(0);
$("#BtnRoot").hide(0);
$("#BtnFactorial").hide(0);
$("#BtnPowerNegative").hide(0);
$("#BtnPI").hide(0);
$("#BtnE").hide(0);
let array = [];
let result = document.getElementById('result');
let ResultEval;
let ResultSpare1;
let ResultSpare2;
$("#BtnReverse").click(()=>{
    $("#BtnPowerX").toggle(250);
    $("#BtnLg").toggle(250);
    $("#Btnln").toggle(250);
    $("#BtnBracketLeft").toggle(250);
    $("#BtnBracketRight").toggle(250);
    $("#BtnRoot").toggle(250);
    $("#BtnFactorial").toggle(250);
    $("#BtnPowerNegative").toggle(250);
    $("#BtnPI").toggle(250);
    $("#BtnE").toggle(250);
});
$("#BtnResult").click(()=>{
    if(ResultEval.includes('÷') === true, ResultEval.includes('×') === true ){
        ResultSpare1 = ResultEval;
        ResultSpare1 = ResultSpare1.replace('×', '*');
        ResultSpare1 = ResultSpare1.replace('÷', '/');
        result.value = eval(ResultSpare1);
    }
    else if(ResultEval.includes('÷') === true){
        ResultSpare1 = ResultEval;
        ResultSpare1 = ResultSpare1.replace('÷', '/');
        result.value = eval(ResultSpare1);
    }
    else if(ResultEval.includes('×') === true){
        ResultSpare1 = ResultEval;
        ResultSpare1 = ResultSpare1.replace('×', '*');
        result.value = eval(ResultSpare1);
    }
    ResultEval = ResultSpare1;
    result.value = eval(ResultEval);
});
$("#BtnClear").click(()=>{
    result.value = '';
    ResultEval = result.value;
});
$("#BtnNegetivePositive").click(()=>{
    result.value = result.value * -1;
    ResultEval = result.value;
});
$("#BtnPercent").click(()=>{
    result.value = result.value / 100;
    ResultEval = result.value;
})
$("#BtnSeparate").click(()=>{
    result.value += '÷';
    ResultEval = result.value;
})
$("#BtnMultiply").click(()=>{
    result.value += '×';
    ResultEval = result.value;
})
$("#BtnPositive").click(()=>{
    result.value += '+';
    ResultEval = result.value;
});
$("#BtnNegative").click(()=>{
    result.value +='-';
    ResultEval = result.value;
});
$("#BtnPoint").click(()=>{
    result.value += '.';
    ResultEval = result.value;
});
$("#BtnPowerX").click(()=>{
    result.value = Math.pow(result.value, 2)
    ResultEval = result.value;
});
$("#BtnPowerNegative").click(()=>{
    result.value = Math.pow(result.value, -1);
    ResultEval = result.value;
});
$("#BtnE").click(()=>{
    result.value += Math.E;
    ResultEval = result.value;
});
$("#BtnBracketLeft").click(()=>{
    result.value += '(';
    ResultEval = result.value;
});
$("#BtnBracketRight").click(()=>{
    result.value += ')';
    ResultEval = result.value;
});
$("#BtnPI").click(()=>{
    result.value += 3.14;
    ResultEval = result.value;
});
$("#BtnLg").click(()=>{
    result.value = Math.log10(result.value);
    ResultEval = result.value;
});
$("#Btnln").click(()=>{
    result.value = Math.log(result.value);
    ResultEval = result.value;
}); 
$("#BtnFactorial").click(()=>{
    while(result.value > 0){
        array.push(result.value--);
    }
    let sum = 1;
    for(let i =0; i<array.length; i++){
        sum = sum* array[i];
    }
    result.value = sum;
    ResultEval = result.value;
});
$("#BtnRoot").click(()=>{
    result.value = Math.sqrt(result.value);
    ResultEval = result.value;
});
$("#BtnNumber1").click(()=>{
    result.value+=1;
    ResultEval = result.value;
});
$("#BtnNumber2").click(()=>{
    result.value+=2;
    ResultEval = result.value;
});
$("#BtnNumber3").click(()=>{
    result.value +=3;
    ResultEval = result.value;
});
$("#BtnNumber4").click(()=>{
    result.value +=4;
    ResultEval = result.value;
});
$("#BtnNumber5").click(()=>{
    result.value +=5;
    ResultEval = result.value;
});
$("#BtnNumber6").click(()=>{
    result.value +=6;
    ResultEval = result.value;
});
$("#BtnNumber7").click(()=>{
    result.value +=7;
    ResultEval = result.value;
});
$("#BtnNumber8").click(()=>{
    result.value +=8;
    ResultEval = result.value;
});
$("#BtnNumber9").click(()=>{
    result.value +=9;
    ResultEval = result.value;
});
$("#BtnNumber0").click(()=>{
    result.value +=0;
    ResultEval = result.value;
});