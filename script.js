// Get menu icon, side menu, and overlay elements
const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');

if (menuIcon && sideMenu && overlay) {

    // Open the side menu when hovering over the menu icon
    menuIcon.addEventListener('mouseenter', function() {
        sideMenu.classList.add('open');
        overlay.classList.add('open');
    });

    // Close the side menu when mouse leaves the side menu area
    sideMenu.addEventListener('mouseleave', function() {
        sideMenu.classList.remove('open');
        overlay.classList.remove('open');
    });
}

// Get all images that trigger lightbox
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeButton = document.querySelector('.lightbox-close');
    const prevButton = document.querySelector('.lightbox-prev');
    const nextButton = document.querySelector('.lightbox-next');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const lightboxTitle = document.querySelector('.lightbox-image-title');
    const lightboxSubtitle = document.querySelector('.lightbox-image-subtitle');

    let currentIndex = 0; // Track the index of the image in the lightbox

    // Function to open the lightbox
    function openLightbox(index) {
        const selectedImage = lightboxTriggers[index];
        lightboxImage.src = selectedImage.src;
        lightboxTitle.textContent = selectedImage.dataset.title || '';
        lightboxSubtitle.textContent = selectedImage.dataset.subtitle || '';
        currentIndex = index;  // Update the index

        // Show the lightbox with fade-in effect
        lightboxOverlay.classList.add('show');

        // Generate thumbnails dynamically
        generateThumbnails();
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightboxOverlay.classList.remove('show');
    }

    // Show previous image in lightbox
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + lightboxTriggers.length) % lightboxTriggers.length;
        openLightbox(currentIndex);
    }

    // Show next image in lightbox
    function showNextImage() {
        currentIndex = (currentIndex + 1) % lightboxTriggers.length;
        openLightbox(currentIndex);
    }

    // Generate thumbnails dynamically
    function generateThumbnails() {
        thumbnailContainer.innerHTML = '';  // Clear existing thumbnails
        lightboxTriggers.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image.src;
            thumbnail.alt = image.alt;
            thumbnail.addEventListener('click', () => openLightbox(index));
            thumbnailContainer.appendChild(thumbnail);
        });
    }

    // Add click event to images to open lightbox
    lightboxTriggers.forEach((image, index) => {
        image.addEventListener('click', () => openLightbox(index));
    });

    // Close the lightbox when clicking the close button
    closeButton.addEventListener('click', closeLightbox);

    // Navigate to previous or next image when clicking arrows
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    // Close the lightbox if overlay is clicked
    lightboxOverlay.addEventListener('click', (event) => {
        if (event.target === lightboxOverlay) {
            closeLightbox();
        }
    });



// Function to display the selected category
function showCategory(category) {
    // Hide all categories
    const categories = document.querySelectorAll('.category-content');
    categories.forEach(category => category.classList.remove('active'));

    // Show the selected category
    const selectedCategory = document.getElementById(category);
    selectedCategory.classList.add('active');

    // Update active button
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => button.classList.remove('active'));
    const activeButton = document.querySelector(`.category-btn[onclick="showCategory('${category}')"]`);
    activeButton.classList.add('active');
}





    