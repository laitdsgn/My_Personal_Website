document.addEventListener("DOMContentLoaded", function () {
    
    const projectImages = document.querySelectorAll("#project_image");
    const galleryModal = document.getElementById("galleryModal");
    const galleryImage = document.getElementById("galleryImage");
    const closeModal = document.getElementById("closeModal");
    

    function openGallery(imageSrc) {
        galleryImage.src = imageSrc;
        galleryModal.style.display = "flex";
    }

    function closeGallery() {
        galleryModal.style.display = "none";
    } 

    projectImages.forEach(image => {
        image.addEventListener("click", function () {
            openGallery(image.src)
        });
    });

    closeModal.addEventListener("click", closeGallery);


})