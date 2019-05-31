window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    const visuals = document.querySelector(".visuals");
    const colors = ['#3FBFB2', '#BF593F', '#B0BF3F', '#BFB23F', '#3F92BF', '#963FBF',
                        '#BF3FB2', '#BF3F5D', '#A5BF3F', '#000000'    ]


//lets get going with the sounds here
    pads.forEach((pad, index) => {
        pad.addEventListener("click", () => {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index)
        })
       
    })
//create function that create bubbles
    
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        // bubble.addEventListener('animationend', () => {
        //     visuals.removeChild();
        // })
    }
})
