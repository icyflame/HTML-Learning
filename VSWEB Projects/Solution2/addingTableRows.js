function ele(a) {

    return document.getElementById(a);
}


function addTableRow() {

    main = ele("preflist");

    name = ele("entry").value;

    num = ele("s").value;

    r = main.insertRow(num);

    r.insertCell(0);

    e = document.createElement("tr");

    e.innerHTML = name;

    r.appendChild(e);



}