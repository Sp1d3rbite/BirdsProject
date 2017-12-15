function generateTable() {
    /*
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
 
    // creating all cells
    for (var i = 0; i < 2; i++)
    {
        // creates a table row
        var row = document.createElement("tr");
 
        for (var j = 0; j < 2; j++)
        {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var label = document.createElement("label");
            label.setAttribute("label", "Label");
            label.innerText = "Hoi";

            var cell = document.createElement("INPUT");
            cell.setAttribute("value", "Input");

            row.appendChild(cell);
        }
 
    // add the row to the end of the table body
        tblBody.appendChild(row);
    }
 
    // put the <tbody> in the <table>
    tblBody.appendChild(label);
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    //tbl.setAttribute("border", "2");
    */
}

function Calculate()
{
    //myBody = document.getElementsByTagName("body")[0];

    //myTable = myBody.getElementsByTagName("table")[0];

    //tableRows = mytablebody.getElementsByTagName("tr");

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


