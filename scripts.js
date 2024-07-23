document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.nav-item');
    const contentDiv = document.getElementById('content');

    // Function to load page content
    function loadContent(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;

                // Set active navigation item
                navItems.forEach(item => item.classList.remove('active'));
                document.querySelector(`[data-target="${page}"]`).classList.add('active');
            });
    }

    // Add click event listeners to nav items
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-target');
            loadContent(targetPage);
        });
    });

    // Load the default page
    loadContent('home');
});
