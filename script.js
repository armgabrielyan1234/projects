const btn_inpt = document.querySelector("#btn_inputs");
let number = 1; 

function productsJS() {
    let table = document.querySelector(".table tbody");
    let row = document.createElement("tr");
    let td_1 = document.createElement("td");
    let td_2 = document.createElement("td");
    let td_3 = document.createElement("td");
    let td_4 = document.createElement("td");
    let td_5 = document.createElement("td");
    let td_6 = document.createElement("button");
    let td_7 = document.createElement("button");
    let input_1 = document.querySelector("#anvanum");
    let input_2 = document.querySelector("#gin");
    let input_3 = document.querySelector("#qanak");

    if(input_1.value.length > 0 && input_2.value.length > 0 && input_3.value.length > 0){
    td_1.textContent = number;
    td_2.textContent = input_1.value;
    td_3.textContent = input_2.value;
    td_4.textContent = input_3.value;
    td_5.textContent = td_3.textContent * td_4.textContent;
    td_6.textContent = "delete"
    td_7.textContent = "edit"

    row.appendChild(td_1);
    row.appendChild(td_2);
    row.appendChild(td_3);
    row.appendChild(td_4);
    row.appendChild(td_5);
    row.appendChild(td_6);
    row.appendChild(td_7);
    table.appendChild(row);

    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
    number++;
    }
    
    function productsDeleteJS() {
        let table = document.querySelector(".table tbody");
        let rows = table.querySelectorAll("tr");
    
        if (rows.length > 1) {
            table.removeChild(rows[rows.length - 1]);
    }
    
}
td_6.addEventListener("click", productsDeleteJS)

function productEditJS() {
        input_1.value = td_2.textContent;
        input_2.value = td_3.textContent;
        input_3.value = td_4.textContent;
        btn_inpt.textContent = "Edit";
      
        td_2.textContent= input_1.value;
        td_3.textContent = input_2.value;
        td_4.textContent = input_3.value;
}

td_7.addEventListener("click", productEditJS);
}
btn_inpt.addEventListener("click", productsJS);