(function() {
    const overlay = document.createElement('div');
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = 'https://i.pinimg.com/736x/aa/2a/e5/aa2ae567da2c40ac6834a44abbb9e9ff.jpg';
    
    const title = document.createElement('h1');
    title.innerText = 'kxBypass Development';
    
    const description = document.createElement('p');
    description.innerText = 'Please wait, bypassing...';
    
    overlay.appendChild(logo);
    overlay.appendChild(title);
    overlay.appendChild(description);

    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.style.display = 'none';
    }, 5000);
})();
