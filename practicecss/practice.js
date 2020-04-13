const handle = document.querySelector('.three');

window.addEventListener('click', function() {
    
    handle.style.transition = '2s ease all';
        handle.style.backgroundColor = 'red';
        handle.style.transform = 'translateY(105px)';
        handle.style.width = '500px'
        handle.style.height = '500px'
    
})