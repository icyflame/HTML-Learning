records = new Array();

function validate() {

    //alert(document.getElementById("age"));

    if (isEmpty()) {

        return false;

    }


    if (isNaN(document.getElementById("age").value)) {

        alert("enter only a number as your age");
        return false;

    }

    else

        return true;

}

function adjustCounter() {
    document.getElementById("counter").innerHTML = records.length + " record(s) entered";

}

function isEmpty() {

    name = document.getElementById("nameUser").value;

    age = document.getElementById("age").value;

    address = document.getElementById("addressUser").value;

    if (name == '' && age == '' && address == '') {

        alert("this record is empty.")

        return true;
    }

    else
        return false;

}



function addOneMore() {

    if (validate()) {

        thisRec = new Array();

        thisRec.push("<b>Name: </b>" + document.getElementById("nameUser").value);

        thisRec.push("<b>Age: </b>" + document.getElementById("age").value);

        thisRec.push("<b>Address: </b><br/>" + document.getElementById("addressUser").value);

        records.push(thisRec);

    }


    //alert(records.length);

    (document.getElementById("nameUser")).value = '';
    (document.getElementById("age")).value = '';
    (document.getElementById("addressUser")).value = '';

    adjustCounter();

    //document.getElementById("counter").innerHTML = records.length() + "records entered";

    //alert(records);       

}

function done() {

    addOneMore();

    document.title = "Records entered so far";

    //alert(records)

    to = '';

    for (i = 0; i < records.length; i++) {

        for (j = 0; j < 3; j++)

            to += records[i][j] + "<br/>";

        to += "<br/><hr/>";

    }

    document.write("<span style='font-size:30px'><h1>The details of all the records entered are as so:</h1><br/>" + to + "</span>");

}