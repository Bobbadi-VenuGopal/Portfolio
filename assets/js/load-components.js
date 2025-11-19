// Load header and footer dynamically
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('includes/header.html')
    .then(response => response.text())
    .then(data => {
      const headerElement = document.getElementById('header');
      if (headerElement) {
        headerElement.outerHTML = data;
      }
    })
    .catch(error => console.error('Error loading header:', error));

  // Load footer
  fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
      const footerElement = document.getElementById('footer');
      if (footerElement && footerElement.nextElementSibling) {
        // Replace footer and all following script elements
        const footerContainer = document.createElement('div');
        footerContainer.innerHTML = data;
        footerElement.parentNode.replaceChild(footerContainer, footerElement);
        
        // Also replace the scroll-top and preloader if they exist
        const scrollTop = document.getElementById('scroll-top');
        const preloader = document.getElementById('preloader');
        if (scrollTop) scrollTop.remove();
        if (preloader) preloader.remove();
      }
    })
    .catch(error => console.error('Error loading footer:', error));
});
