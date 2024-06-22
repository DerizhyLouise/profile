function showNavbar() {
    const body = document.getElementsByTagName('body')[0];
    const header = document.getElementById("topHeader");
    const navbar = document.createElement("div");
    
    header.innerHTML = `
        <div class="w-1/2 flex justify-start pl-20">
            <a href="#home"><img class="w-24 h-24 mr-4" src="./assets/svg/logo.svg" alt="Logo"></a>
            <h2 class="text-4xl flex max-md:hidden items-center select-none gradient-text"><a href="#home">Louise Derizhy</a></h2>
        </div>
        <div class="w-1/2 flex justify-end items-center pr-20">
            <button class="text-white hover:text-green-500 duration-200 text-3xl text-center" type="button"
                data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" data-drawer-placement="right"
                aria-controls="drawer-navigation">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    `

    navbar.innerHTML = `
        <div id="drawer-navigation"
            class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-[#1B3358] w-96"
            tabindex="-1" aria-labelledby="drawer-navigation-label">
            <div class="border-b-4 border-[#E91E63] pb-2 p-2 flex justify-center">
                <a href="#home"><img class="w-24 h-24 mr-4" src="./assets/svg/logo.svg" alt="Logo"></a>
                <h2 class="text-4xl flex max-md:hidden items-center select-none gradient-text"><a href="#home">Louise Derizhy</a></h2>
            </div>
            <h5 id="drawer-navigation-label" class="text-base font-semibold uppercase mt-4">Menu</h5>
            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
                class="text-gray-400 bg-transparent hover:bg-[#E91E63] rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close menu</span>
            </button>
            <div class="py-4 overflow-y-auto">
                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="./index.html"
                            class="flex items-center p-2 rounded-lg hover:bg-[#0D192B] group">
                            <svg class="flex-shrink-0 w-8 h-8 transition duration-75"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 576 512">
                                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                            <span class="ms-3">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#profile"
                            class="flex items-center p-2 rounded-lg hover:bg-[#0D192B] group">     
                                <svg class="flex-shrink-0 w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                    <path
                                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                                </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#skill"
                            class="flex items-center p-2 rounded-lg hover:bg-[#0D192B] group">
                            <div class="flex-shrink-0 w-8 h-8"><span class="fa-light fa-screwdriver-wrench"></span></div>
                            <span class="flex-1 ms-3 whitespace-nowrap">Skill</span>
                        </a>
                    </li>
                    <li>
                        <a href="#education"
                            class="flex items-center p-2 rounded-lg hover:bg-[#0D192B] group">
                            <svg class="flex-shrink-0 w-8 h-8"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 448 512">
                                <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Education</span>
                        </a>
                    </li>
                    <li>
                        <a href="./calculator.html"
                            class="flex items-center p-2 rounded-lg hover:bg-[#0D192B] group">
                            <svg class="flex-shrink-0 w-5 h-5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 384 512">
                                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Kalkulator</span>
                        </a>
                    </li>
                    <li>
                        <a href="./discussion.html"
                            class="flex items-center p-2 rounded-lg hover:bg-[#0D192B] group">
                            <svg class="flex-shrink-0 w-5 h-5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 18">
                                <path d="M5 0C2.24 0 0 2.24 0 5v5c0 2.76 2.24 5 5 5h1v3l4-3h5c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5H5zm10 2c1.66 0 3 1.34 3 3v5c0 1.66-1.34 3-3 3H9l-3 3v-3H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h10z"/>
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Diskusi</span>
                        </a>
                    </li>
                    <li>
                        <a href="./publication.html"
                            class="flex items-center p-2 rounded-lg hover:bg-[#0D192B] group">
                            <svg class="flex-shrink-0 w-5 h-5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 512 512">
                                <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/>
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Publikasi</span>
                        </a>
                    </li>
                    <li>
                        <button href="./login.html" onclick="logout()"
                            class="flex items-center justify-start w-full p-2 rounded-lg hover:bg-[#0D192B] group">
                            <svg class="flex-shrink-0 w-5 h-5"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                            </svg>
                            <span class="flex-1 ms-3 text-left whitespace-nowrap">Keluar</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    `

    body.appendChild(header);
    body.appendChild(navbar);
}

function navbarClick() {
    const icon = document.getElementById("dropdownIcon")
    if (icon) {
        if (icon.classList.contains('fa-chevron-down')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    }
}

function handleOutsideClick(event) {
    const dropdownButton = document.getElementById('dropdownDefaultButton');
    const dropdown = document.getElementById('dropdown');
    const icon = document.getElementById('dropdownIcon');

    if (!dropdownButton.contains(event.target) && !dropdown.contains(event.target)) {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

fetch('./json/footer.json').then(response => response.json()).then(data => {
    const footer = document.querySelector('footer');
    const footerContainer = document.createElement('div');
    const footerRow = document.createElement('div');
    footerContainer.className = "footer-container";
    footerRow.className = "footer-row";
    
    data.forEach(category  => {
        const element = document.createElement('div');
        element.className = "footer-col";
        
        element.innerHTML = `
            <h4><span class="gradient-text">${category.name}</span></h4>
        `

        if (category.type === 'social') {
            const div = document.createElement('div');
            div.className = "social-links";
            category.item.forEach(item => {
                div.innerHTML += `
                    <a href="${item.path}" target="${item.target}"><i class="${item.icon}"></i></a>
                `
                element.appendChild(div);
            });
        } else {
            const ul = document.createElement('ul');
            category.item.forEach(item => {
                ul.innerHTML += `
                    <li><a href="${item.path}" target="${item.target}">${item.name}</a></li>
                `
                element.appendChild(ul);
            });
        }

        footerRow.appendChild(element);
    });
    footerContainer.appendChild(footerRow);
    footer.appendChild(footerContainer);
}).catch(error => {
    console.error('Error fetching or processing JSON data:', error);
});

function openModal (id) {
    const modal = document.getElementById("projectModal");

    if (isOpen) {
        return;
    }

    fetch('./json/projects.json').then(response => response.json()).then(data => {
        const project = data.find(item => item.id === parseInt(id));
        const content = document.querySelector(".project-modal-info");

        if (project) {
            content.innerHTML += `
                <h2 class="text-4xl max-md:text-3xl"><span class="gradient-text">${project.title}</span></h2>
                <h2 class="mt-4 mb-4 pt-4 font-semibold text-2xl max-md:text-xl border-t-2 border-[#E91E63]">Description</h2>
                <p class="text-base mb-5 max-md:text-sm">${project.time}</p>
                <p class="text-base mb-5 max-md:text-sm">${project.description.join('')}</p>
                <h2 class="mt-4 mb-4 pt-4 font-semibold text-2xl max-md:text-xl border-t-2 border-[#E91E63]">Project's Media</h2>
            `;
            
            const projectMedia = document.createElement('div');
            
            if (project.media.length === 0) {
                const empty = document.createElement('p');
                empty.innerHTML = "No media available in this project.<br/>I will upload the media soon after the project has done.";
                empty.className = "mt-2"
                projectMedia.append(empty);
            }

            project.media.forEach(media => {
                const list = document.createElement('div');
                list.className = "flex w-full my-5 mr-5 h-44";
                list.innerHTML = `
                    <div class="bg-[#0D192B] p-8 w-64 max-[480px]:py-8 max-[480px]:px-2.5 rounded-l-lg">
                        <h3 class="text-sm font-semibold text-white opacity-80 m-0 uppercase tracking-wider bg-[#0D192B] max-[480px]:text-xs">MEDIA TYPE :</h3>
                        <h2 class="text-2xl text-white tracking-wider my-2.5 bg-[#0D192B] max-[480px]:text-base">${media.type}</h2>
                        <a href="#"></a>
                    </div>
                    <div class="bg-[#7175DA] p-8 relative w-full max-xl:px-8 max-[480px]:py-8 max-[480px]:px-2.5 rounded-r-lg">
                        <h3 class="text-sm font-semibold opacity-80 m-0 uppercase tracking-wider bg-[#7175DA] text-[#0D192B] max-[480px]:text-xs">TITLE :</h3>
                        <h2 class="text-2xl tracking-wider my-2.5 bg-[#7175DA] text-[#0D192B] max-[480px]:text-base">${media.title}</h2>
                        <button class="bg-[#2A265F] rounded-lg shadow-md text-white text-base px-4 py-2 absolute bottom-3.5 right-7 max-sm:right-3.5 max-sm:text-xs tracking-wide transition-transform transition-colors duration-200 ease-in-out hover:scale-110 hover:bg-[#334579]" onClick="directToMedia('${media.url}')">View</button>
                    </div>
                `;

                projectMedia.append(list);
            })

            content.append(projectMedia);

            modal.onclick = function(event) {
                event.stopPropagation();
            }
        }

        const header = document.getElementsByTagName("header")[0];
        const main = document.getElementsByClassName("main")[0];
        const sideBar = document.getElementsByClassName("side-bar")[0];
        const footer = document.getElementsByTagName("footer")[0];

        header.style.filter = 'blur(20px)';
        main.style.filter = 'blur(20px)';
        sideBar.style.filter = 'blur(20px)';
        footer.style.filter = 'blur(20px)';

        isOpen = true;
        modal.style.display = "block";

        window.onclick = function() {
            closeModal();
        }
    }).catch(error => {
        console.error('Error fetching or processing JSON data:', error);
    });
}

function closeModal () {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
    modal.innerHTML = `
        <div class="p-12 w-full">
            <div class="absolute right-20 top-5 z-50">
                <button class="bg-[#E91E63] rounded-full text-white w-14 h-14 max-md:w-12 max-md:h-12 fixed hover:bg-[#E91EA5] hover:ease-in-out hover:scale-105 hover:rotate-[360deg] hover:duration-300 transition-transform transform origin-center" title="Close" onClick="closeModal()">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="project-modal-info"></div>
        </div>
    `;

    const header = document.getElementsByTagName("header")[0];
    const main = document.getElementsByClassName("main")[0];
    const sideBar = document.getElementsByClassName("side-bar")[0];
    const footer = document.getElementsByTagName("footer")[0];

    header.style.filter = 'none';
    main.style.filter = 'none';
    sideBar.style.filter = 'none';
    footer.style.filter = 'none';

    isOpen = false; 
    modal.onclick = null;
}

let isOpen = false;
showNavbar();
document.body.addEventListener('click', handleOutsideClick);