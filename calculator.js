var numberList = []
var opeartorList = []
var string=''
var text = ''
var number =0
function SaveNumber(num)
{
   string += num.toString()
   text += num.toString()
   ShowInput()
}
function SaveOperator(op)
{
   numberList.push(parseInt(string))
   text += op
   string = ''
   opeartorList.push(op)
   ShowInput()
}
function ShowInput() {
    document.getElementById('text').value = text;
 }
function Calculation()
{
    numberList.push(parseInt(string))
    number=numberList[0]
     var result =0
    for(var i =0 ; i<opeartorList.length;i++)
    {
        if((opeartorList[i] == '+' || opeartorList[i] == '-') && (opeartorList[i+1] == '*' || opeartorList[i] == '/'))
        {
            result =PerformCalculation(numberList[i+1],opeartorList[i+1],numberList[i+2]);
            number = PerformCalculation(number,opeartorList[i],result);
            i++;
        }
        else{
            number = PerformCalculation(numberList[i],opeartorList[i],numberList[i+1]);
        }
    }
    text = number;
    ShowInput()
}

function PerformCalculation(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operator";
    }
}

function Reset()
{
    numberList = []
    opeartorList = []
    string=''
    text = ''
    ShowInput()
}