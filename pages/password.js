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

const passwordBox = document.getElementById('myPass');
const copy = document.getElementById('copy');
const length = 16;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+=[]{}/';
const all = upperCase + lowerCase + number + symbol;

function generate(){
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  passwordBox.value = password;
}

document.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
      generate();
  }
})
copy.onclick = function copyToClipboard() {
    const password = passwordBox.value;
  
    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy password: ', err);
    });
  }
  
  // Event listeners for the buttons
  document.getElementById('generateBtn').addEventListener('click', generate);
  document.getElementById('copyBtn').addEventListener('click', copyToClipboard);

