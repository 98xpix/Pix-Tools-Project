document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".material-symbols-outlined");
    const sidebar = document.querySelector("aside");

    menuIcon.addEventListener("click", function () {
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-500px";
        } else {
            sidebar.style.right = "0px";
        }
    });
});


function calculate(){
        // Parse the values of currentYear and birthYear to numbers
        const currentYearValue = new Date().getFullYear();
        const birthYearValue = Number(birthYear.value);
    
        // Check if both inputs are valid numbers
        if (isNaN(currentYearValue) || isNaN(birthYearValue)) {
            console.error("Invalid input: Please enter valid numbers.");
            display.value = "Invalid input";
            return;
        }
    
        // Perform the calculation
        const age = currentYearValue - birthYearValue;
        
        // Display the result
        display.innerText = "Your age is: "+' '+age +' '+'years old.';
        if(age > 30){
            document.getElementById('text').textContent = "You are old 👴";
        }else{
            document.getElementById('text').textContent = "You are young 👦";
        }        
        if(age <= 0 || birthYearValue < 0 || birthYearValue <= 1920){
            display.innerText = 'Invalid Age!';
            document.getElementById('text').textContent = "";
        }
        if(birthYearValue == '') {
            display.innerText = 'Invalid Age!';
            document.getElementById('text').textContent = "";
        }
}

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        calculate();
    }
})