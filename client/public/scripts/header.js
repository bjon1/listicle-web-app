
const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.classList.add('header-container');
header.appendChild(headerContainer);

const headerLeft = document.createElement('div');
headerLeft.classList.add('header-left');
headerContainer.appendChild(headerLeft);

const headerImg = document.createElement('div');
headerImg.classList.add('header-img');
headerLeft.appendChild(headerImg);

const logoImg = document.createElement('img');
logoImg.classList.add('logo-img');
logoImg.src = '/logo.png';
logoImg.alt = 'Minecraft Logo';
headerImg.appendChild(logoImg);

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Minecraft Mobs';
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement('div');
headerRight.classList.add('header-right');
headerContainer.appendChild(headerRight);

const headerButton = document.createElement('button');
headerButton.classList.add('header-button');
headerButton.textContent = 'All Mobs';
headerRight.appendChild(headerButton);

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
})
