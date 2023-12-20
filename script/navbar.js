function showNavbar() {
    const body = document.getElementsByTagName('body')[0];
    const navbar = document.createElement('header');
    navbar.innerHTML = `
        <h2 class="logo">Louise Derizhy</h2>
        <h2 class="logo-small">L D</h2>
        <nav class="navigation">
            <a href="#" class='nav-button'>
                <span class="nav-name">Home</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#" class='nav-button'>
                <span class="nav-name">Profile</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#" class='nav-button'>
                <span class="nav-name">Project</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
            <a href="#" class='nav-button'>
                <span class="nav-name">About</span>
                <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
            </a>
        </nav>
    `
    
    const navbarSpace = document.createElement('div');
    navbarSpace.innerHTML = `<div class="navbar-space"></div>`

    body.appendChild(navbar);
    body.appendChild(navbarSpace);
}

showNavbar();