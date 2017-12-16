var weightUnitIndex = 1;
var weightUnit = 'Gram';
var fluidUnitIndex = 0;
var fluidUnit = 'Milliliter';

function Calculate()
{
    inputFields = document.getElementsByTagName("input");

    var emptyFields = new Array();
    var val;
    var unit;

    for (var i = 0; i < inputFields.length; i++)
    {
        if (inputFields[i].value === "") {
            emptyFields.push(inputFields[i]);
        }

        if (emptyFields.length > 1) {
            alert("Vul ten minste 3 velden in.");
            return;
        }

        inputFields[i].style.color = 'black';
        inputFields[i].style.background = 'white';
    }

    if (inputFields[2] === emptyFields[0])
    {
        inputFields[2].value = GetGramValue(inputFields[0], inputFields[1], inputFields[3]);
        inputFields[2].style.color = 'white';
        inputFields[2].style.background = 'green';
        
        val = inputFields[2].value;
    }
    else if (inputFields[3] === emptyFields[0])
    {
        inputFields[3].value = GetMilValue(inputFields[0], inputFields[1], inputFields[2]);
        inputFields[3].style.color = 'white';
        inputFields[3].style.background = 'green';
        
        val = inputFields[3].value;
    }
    
    if (emptyFields.length > 0)
    {
        CreateAndFillMessage('Je hebt ' + val + ' ' + fluidUnit + ' nodig!');
    }
    else
    {
        CreateAndFillMessage('Je hebt ' + inputFields[3].value + ' ' + fluidUnit + ' nodig voor een dier van ' + inputFields[2].value + ' ' + weightUnit);
    }
}

function GetGramValue(gram, mil1, mil2)
{
    return parseFloat((gram.value / mil1.value * mil2.value).toFixed(3));
}

function GetMilValue(gram1, mil1, gram2)
{
    return parseFloat((mil1.value / gram1.value * gram2.value).toFixed(3));
}

function CreateAndFillMessage(msg) 
{
    var myDiv;
    var text;
    
    // delete old
    if (document.getElementById('custAlert') !== null)
    {
        document.getElementById('custAlert').remove();
    }
    
    myDiv = document.createElement('div');
    
    myDiv.id = 'custAlert';
    myDiv.setAttribute('class', 'customAlert');
    myDiv.classList.add('text-center');
    myDiv.classList.add('alert');
    myDiv.classList.add('alert-info');

    text = document.createTextNode('');

    var myContainer = document.body.getElementsByClassName('container-fluid')[0];

    myDiv.appendChild(text);
    myContainer.appendChild(myDiv);
    
    myDiv.textContent = msg;
}

// change units
function ChangeWeightUnit(index, button) 
{
    document.getElementById('weightUnitBtn').innerHTML = button.innerHTML;
    weightUnitIndex = index;
    weightUnit = button.innerHTML;
}

function ChangeFluidUnit(index, button) 
{
    document.getElementById('fluidUnitBtn').innerHTML = button.innerHTML;
    fluidUnitIndex = index;
    fluidUnit = button.innerHTML;
}


























