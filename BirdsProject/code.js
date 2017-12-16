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
            break;
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
        unit = 'gram';
    }
    else if (inputFields[3] === emptyFields[0])
    {
        inputFields[3].value = GetMilValue(inputFields[0], inputFields[1], inputFields[2]);
        inputFields[3].style.color = 'white';
        inputFields[3].style.background = 'green';
        
        val = inputFields[3].value;
        unit = 'milliliter';
    }

    CreateAndFillMessage('Je hebt ' + val + ' ' + unit + ' nodig!');
}

function GetGramValue(gram, mil1, mil2)
{
    return parseFloat((gram.value / mil1.value * mil2.value).toFixed(2));
}

function GetMilValue(gram1, mil1, gram2)
{
    return parseFloat((mil1.value / gram1.value * gram2.value).toFixed(2));
}

function CreateAndFillMessage(msg) 
{
    var myDiv;
    var text;
    
    // create new if not existing
    if (document.getElementById('custAlert') === null)
    {
        myDiv = document.createElement('div');
    
        myDiv.id = 'custAlert';
        myDiv.setAttribute('class', 'customAlert');
        myDiv.classList.add('text-center');
        myDiv.classList.add('alert');
        myDiv.classList.add('alert-success');
        
        text = document.createTextNode('');
        
        var myContainer = document.body.getElementsByClassName('container-fluid')[0];
    
        myDiv.appendChild(text);
        myContainer.appendChild(myDiv);
    }
    // else, uses old one
    else
    {
        myDiv = document.getElementById('custAlert');
    }
    
    myDiv.textContent = msg;
}























