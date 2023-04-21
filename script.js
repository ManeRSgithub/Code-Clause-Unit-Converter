// function to convert units
function convertUnit(){
    // get the input value, input unit and output unit
    var inputValue = document.getElementById('inputValue').value;
    var inputUnit = document.getElementById('inputUnit').value;
    var outputUnit = document.getElementById('outputUnit').value;

    // convert the input value to meter
    var meterValue;
    if(inputUnit == 'Kilometer'){
        meterValue = inputValue * 1000;
    } else if(inputUnit == 'Meter'){
        meterValue = inputValue;
    } else if(inputUnit == 'Centimeter'){
        meterValue = inputValue / 100;
    } else if(inputUnit == 'Millimeter'){
        meterValue = inputValue / 1000;
    } else if(inputUnit == 'Mile'){
        meterValue = inputValue * 1609.34;
    } else if(inputUnit == 'Yard'){
        meterValue = inputValue * 0.9144;
    } else if(inputUnit == 'Foot'){
        meterValue = inputValue * 0.3048;
    } else if(inputUnit == 'Inch'){
        meterValue = inputValue * 0.0254;
    }

    // convert the meter value to output unit
    var outputValue;
    if(outputUnit == 'Kilometer'){
        outputValue = meterValue / 1000;
    } else if(outputUnit == 'Meter'){
        outputValue = meterValue;
    } else if(outputUnit == 'Centimeter'){
        outputValue = meterValue * 100;
    } else if(outputUnit == 'Millimeter'){
        outputValue = meterValue * 1000;
    } else if(outputUnit == 'Mile'){
        outputValue = meterValue / 1609.34;
    } else if(outputUnit == 'Yard'){
        outputValue = meterValue / 0.9144;
    } else if(outputUnit == 'Foot'){
        outputValue = meterValue / 0.3048;
    } else if(outputUnit == 'Inch'){
        outputValue = meterValue / 0.0254;
    }

    // set the output value
    document.getElementById('outputValue').value = outputValue;
}