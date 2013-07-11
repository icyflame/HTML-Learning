function ele(a) {

    return document.getElementById(a);
}
    
function addElements() {

    main = ele("s");

    for (i = 0; i < 216; i++) {

        e = document.createElement("option");

        e.value = i + 1;

        e.id = i + 1;

        e.innerHTML = i + 1;

        main.appendChild(e);


    }


}