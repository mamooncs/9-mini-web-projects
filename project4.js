let temp = document.getElementById("temperatureInput");
let unit = document.getElementById("unit");
let results = document.getElementById("results");
const kelvin = 273.15;
// remember 1C=273K where 1K=-273C
// we will create a function that calculates the either calculus of Farenhite or Kelvin

function calculate(temp,unit)
{
    if(unit == "C")
    {
        let result=temp-273.15
        results.textContent = result.toFixed(2);
    }
    else if(unit == "F")
    {
        let result=(temp-273.15)*9/5+32
        results.textContent = result.toFixed,(2);
    }
    else if(unit == "K")
    {
        let result=temp+273.15
        results.textContent = result.toFixed(2);
    }
    else if(unit == "2F")
    {
        let result=(temp*9/5)+32
        results.textContent = result.toFixed(2);
    }
    else if(unit == "2C")
    {
        let result=(temp-32)*5/9
        results.textContent = result.toFixed(2);
    }
    else if(unit == "2K")
    {
        let result=((temp-32)*5/9)+273.15
        results.textContent = result.toFixed(2);
    }
    else
    {
        results.textContent = "Invalid unit. Please enter C, F, K, 2F, 2C, or 2K.";
    }
}
function convert()
{
    calculate(temp.value,unit.value);
}