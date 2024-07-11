window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    const maxScroll = 300; // Change this value to control when the header becomes fully transparent

    const opacity = Math.max(1 - (scrollPosition / maxScroll), 0.5);
    header.style.backgroundColor = `rgba(51, 51, 51, ${opacity})`;
});
