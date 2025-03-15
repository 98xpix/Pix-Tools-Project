
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
