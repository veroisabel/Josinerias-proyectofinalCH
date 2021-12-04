const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop:true,
    delay:75
})

typewriter
 .typeString('Buenos Aires, Argentina')
 .pauseFor(200)
 .start();