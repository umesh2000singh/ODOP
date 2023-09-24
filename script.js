//hamburger menu logic
let hamburgermenu = document.querySelector(".hamburger");
hamburgermenu.addEventListener("click", () => {
    document.querySelector(".hamburgerMenu").classList.toggle("hamburgerMenu_clicked");

})

//hamburger menu logic


let signin_button = document.querySelector(".signIN");
signin_button.addEventListener("click", () => {
    document.querySelector(".signin_menu").classList.toggle("signin_menu_display");
})


//register logic
var selectBox = document.getElementById("selectbox");

// Add an event listener to listen for changes in the selected option
selectBox.addEventListener("change", function () {
    // Get the selected value
    var selectedValue = selectBox.value;

    // Check if a valid option is selected
    if (selectedValue !== "") {
        // Redirect to the selected URL
        window.location.href = selectedValue;
    }
});



