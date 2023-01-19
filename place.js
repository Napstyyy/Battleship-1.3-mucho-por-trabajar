export function placing()
{
    const smallShip = document.getElementById('smallShip');
    const mediumShip = document.getElementById('mediumShip');
    const largeShip = document.getElementById('largeShip');
    const veryLargeShip = document.getElementById('veryLargeShip');
    const game = Array.from(document.querySelectorAll(".box"));
    game.forEach(element => element.addEventListener('click', event => {
        if(smallShip.checked)
        {
            let target = event.target;
            target.classList.remove("box");
            target.classList.add("ship");

        }
            
    }));
};

//Bueno Mateo este proyecto no te dio el tiempo de terminarlo, sin embargo ya puedes darle click en las cajas del grid, lo que falta es que te asegures de como posicionar los barcos, espero lo termines pronto <3