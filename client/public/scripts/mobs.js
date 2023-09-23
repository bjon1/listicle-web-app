

const renderMobs = async () => {
    const response = await fetch('/mobs');
    const data = await response.json();
    
    const mainContent = document.getElementById('main-content');
    if(data) {
        data.map(mob => {
            const card = document.createElement('div')
            card.classList.add('card')

            /* image */
            const leftContainer = document.createElement('div')
            leftContainer.classList.add('left-container')
            const img = document.createElement("img");
            img.src = `${mob.image}`;
            img.className = "mob-image";
            leftContainer.appendChild(img);

            /*name, description, Read More */
            const rightContainer = document.createElement('div')
            rightContainer.classList.add('right-container')

            /* name */
            const name = document.createElement('h3')
            name.textContent = mob.name
            rightContainer.appendChild(name)

            /* description */
            const description = document.createElement('p')
            description.textContent = mob.description
            rightContainer.appendChild(description)

            /* Read More */
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/mobs/${mob.id}`
            rightContainer.appendChild(link)

            /* Add to main container */
            card.appendChild(leftContainer)
            card.appendChild(rightContainer)
            mainContent.appendChild(card)
        })

    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Mobs Available 😞'
        mainContent.appendChild(message)
    }
}

renderMobs();
