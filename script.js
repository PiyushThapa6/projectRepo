
document.querySelectorAll('.route-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Details of the route will be displayed.');
    });
});

document.getElementById('book-now').addEventListener('click', () => {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
});
