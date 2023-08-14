function myFunction() {
    const arrow1 = document.querySelector('.arrow1');
    const arrow2 = document.querySelector('.arrow2');
    const sk1 = document.getElementById('sk-1');
    const sk2 = document.getElementById('sk-2');
    const audio = document.querySelector('#audio');
    const audio1 = document.querySelector('#audio1');
    const arrows = [arrow1, arrow2];
    const shaktis = [sk1, sk2];
    const arrowIds = ['ar-1', 'ar-2'];
    const button = document.getElementById("btn");
    
    //Disable Shoot button
    button.disabled = true;

    // Add animation classes to arrows so they start moving
    arrows.forEach((arrow, index) => {
        arrow.classList.add(`animate_${index + 1}`);
    });

    // Add shakti classes to sk1 and sk2
    shaktis.forEach((shakti, index) => {
        shakti.classList.add(`shakti_${index + 1}`);
    });

    // Generate random background colors for shaktis
    shaktis.forEach(shakti => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        shakti.style.backgroundColor = `#${randomColor}`;
    });
    
    audio.play();                 // Play arrow moving audio
    setTimeout(() => {           // Play arrow hiting sound
        audio1.play();
    }, 1500);

    // Hide defeated arrow
    const nonVisibleId = arrowIds[Math.floor(Math.random() * arrowIds.length)];
    const nonVisibleArrow = document.getElementById(nonVisibleId);
    setTimeout(() => {
        nonVisibleArrow.style.visibility = 'hidden';
        shaktis.forEach(shakti => shakti.classList.remove('shakti_1', 'shakti_2'));
    }, 3000);

    // Reset arrows
    setTimeout(() => {
        nonVisibleArrow.style.visibility = 'visible';
        arrows.forEach(arrow => arrow.classList.remove('animate_1', 'animate_2'));

        //Enable Shoot button
        button.disabled = false;
    }, 4965);
}



