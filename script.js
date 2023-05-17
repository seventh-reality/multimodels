const modelViewer = document.querySelector("model-viewer");
     
window.switchSrc = (element, name) => {
    const base = "/" + name;
    modelViewer.src = base + '.glb';
    modelViewer.poster = base + '.webp';
    const slides = document.querySelectorAll(".slide");
    slides.forEach((element) => {
        element.classList.remove("selected");
    });
    element.classList.add("selected");
}

document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
    ev.preventDefault();
});