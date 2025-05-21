// Add event listener to search bar
document.querySelector('.search-bar button').addEventListener('click', () => {
    // Get search query
    const searchQuery = document.querySelector('.search-bar input').value;
    // Log search query
    console.log(searchQuery);
});

// Add event listener to product card buttons
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        // Log product name
        console.log(button.parentNode.querySelector('h3').textContent);
    });
});

// Add animation to hero section
document.querySelector('.hero').addEventListener('mouseover', () => {
    document.querySelector('.hero-image').style.transform = 'scale(1.1)';
});

document.querySelector('.hero').addEventListener('mouseout', () => {
    document.querySelector('.hero-image').style.transform = 'scale(1)';
});