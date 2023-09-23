
const renderMob = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop());
    const response = await fetch('/mobs');
    const data = await response.json();
    const mobContent = document.getElementById('mob-content');
    
    let mob;
    if(data) {
        mob = data.find((mob) => mob.id === requestedID);
    }

    if(mob) {

        document.getElementById('name').textContent = mob.name;
        document.getElementById('image').src = mob.image;
        document.getElementById('description').textContent = mob.description;
        document.getElementById('health').textContent = `${mob.health} ❤️`;
        document.title = mob.name;
    } else {
        const message = document.createElement('h2')
        message.textContent = 'Where did the mob go? 😞'
        mobContent.appendChild(message)
    }

}

renderMob();