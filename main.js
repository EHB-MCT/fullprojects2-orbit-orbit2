const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupContent = document.getElementById("popupContent");
const popupImage = document.getElementById("popupImage");
const dropdownBtn = document.getElementById("dropdownBtn");
//const dropdownList = document.querySelector(".dropdown .list");

let currentImageIndex = 0;
let currentImages = [];
const municipalityData = {
    Tienen: {
        title: "Tienen",
        images: [
            "images/DSC_0335.JPG",
            "images/DSC_0342.JPG"],
        content: "Bijwonen overleg"
    },
    Leuven: {
        title: "Leuven",
        images: [
            "images/DSC_0335.JPG",
            "images/DSC_0342.JPG"],
        content: "duurzame verankering"
    },
    Brussel: {
        title: "Brussel",
        images: [
            "images/BRUstandmarkt01.png",
            "images/BRUstandmarkt02.png",
            "images/BRUiftar01.png"],
        content: "intergenerationele iftar + standenmarkt Brussel"

    },
    Roeselare: {
        title: "Roeselare",
        images: [
            "images/DSC_0335.JPG",
            "images/DSC_0342.JPG"],
        content: "interlevensbeschouwelijk plan"
    },
    Willebroek: {
        title: "Willebroek",
        images: [
            "images/DSC_0335.JPG",
            "images/DSC_0342.JPG"],
        content: "Info avond over drugs"
    },
    Antwerpen: {
        title: "Antwerpen",
        images: [
            "images/DSC_0335.JPG",
            "images/DSC_0342.JPG"],
        content: "Studiedag afscheid"
    },
    Ninove: {
        title: "Ninove",
        images: [
            "images/DSC_0335.JPG",
            "images/DSC_0342.JPG"],
        content: "Antiracisme"
    },
    Dendermonde: {
        title: "Dendermonde",
        images: [
            "images/DSC_0335.JPG",
            "images/DSC_0342.JPG"],
        content: "Vrededialoog"
    },
    Gent: {
        title: "Gent",
        images: [
            "images/DSC_0335.JPG",
            "images/DSC_0342.JPG"],
        content: "Samen zingen"
    },
    Geraardsbergen: {
        title: "Geraardsbergen",
        images: [
            "images/DSC_0335.JPG",
            "images/DSC_0342.JPG"],
        content: "Project ingediend"
    }

};
document.querySelectorAll("path").forEach(path => {

    path.style.cursor = "pointer";

    path.addEventListener("click", () => {

        const data = municipalityData[path.id];

        if (!data) return;
        currentImages = data.images;
        currentImageIndex = 0;
        popupTitle.textContent = data.title;
        popupContent.textContent = data.content;
        popupImage.src = data.images[0];
        popup.style.display = "block";
    });
});
document.querySelectorAll("polygon").forEach(poly => {

    poly.style.cursor = "pointer";

    poly.addEventListener("click", () => {

        const data = municipalityData[poly.id];

        if (!data) return;
        currentImages = data.images;
        currentImageIndex = 0;
        popupTitle.textContent = data.title;
        popupContent.textContent = data.content;
        popupImage.src = data.images[0];
        popup.style.display = "block";


    });
});
function updateImage() {

    popupImage.src = currentImages[currentImageIndex];

}

document.getElementById("closePopup")
    .addEventListener("click", () => {
        popup.style.display = "none";
    });

nextBtn.addEventListener("click", () => {

    currentImageIndex++;

    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }

    updateImage();

});
prevBtn.addEventListener("click", () => {

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }

    updateImage();

});
