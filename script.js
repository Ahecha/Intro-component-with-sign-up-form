const inputs = document.querySelectorAll("input");
const alert = document.querySelector(".hidden-alert");
const button = document.querySelector(".claim-button");


/* function showAlert(e) {
    inputs.forEach(element => {
        if(element.value == "") {
            alert.style.display = "flex";
            console.log(element.length);
        }
      })
} */

const showAlert = e => {
    e.preventDefault();

    inputs.forEach(element => {
        if(element.value == "") {
            alert.style.display = "flex";
        } 

        console.log(element.length)

      });


}


button.addEventListener("click", showAlert)


console.log(inputs.length);