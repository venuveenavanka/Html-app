document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".nav-item");
    const pages = document.querySelectorAll(".page-content");

    // Function to show the selected page and update navigation item
    function showPage(pageId) {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });

        navItems.forEach(item => {
            if (item.getAttribute("data-target") === pageId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Event listener for navigation items
    navItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("data-target");
            showPage(targetId);
        });
    });

    // Optionally, show the initial page
    showPage("home");
});
