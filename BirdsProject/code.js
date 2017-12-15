function Calculate()
{
    inputFields = document.getElementsByTagName("input");

    var emptyFields = new Array();

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
    }
    else if (inputFields[3] === emptyFields[0])
    {
        inputFields[3].value = GetMilValue(inputFields[0], inputFields[1], inputFields[2]);
        inputFields[3].style.color = 'white';
        inputFields[3].style.background = 'green';
    }
}

function GetGramValue(gram, mil1, mil2)
{
    return parseFloat(gram.value / mil1.value * mil2.value);
}

function GetMilValue(gram1, mil1, gram2)
{
    return parseFloat(mil1.value / gram1.value * gram2.value);
}


