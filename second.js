
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownList = document.querySelector(".dropdown .list");
dropdownBtn.addEventListener("click", () => {

    dropdownList.classList.toggle("show");
    console.log("lmao");
});
document.addEventListener("click", (event) => {

    if (
        !dropdownBtn.contains(event.target) &&
        !dropdownList.contains(event.target)
    ) {
        dropdownList.classList.remove("show");
    }

});