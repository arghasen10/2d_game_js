const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.2


class Sprite {
    constructor({position, velocity}){
        this.position =  position,
        this.velocity = velocity
    }
    draw(){
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.position.w, this.position.h)
    }
    update () {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.position.h + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }
        else this.velocity.y += gravity
        if (this.position.x + this.velocity.x + this.position.w >= canvas.width) {
            this.velocity.x = 0
        }

    }
}


const player = new Sprite({
    position: {
        x: 0,
        y: 0,
        w: 50,
        h: 80
    },
    velocity: {
        x: 0,
        y: 10
    }
})



const opponent = new Sprite({
    position: {
        x: 200,
        y: 100,
        w: 50,
        h: 80
    },
    velocity: {
        x: 0,
        y: 10
    }

})

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}


function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    opponent.update()
    player.velocity.x = 0
    opponent.velocity.x = 0


    if(keys.a.pressed) {
        player.velocity.x = -1
    }
    else if(keys.d.pressed){
        player.velocity.x = 1
    }
    if(keys.ArrowLeft.pressed) {
        opponent.velocity.x = -1
    }
    else if(keys.ArrowRight.pressed){
        opponent.velocity.x = 1
    }
    if (keys.w.pressed){
        player.velocity.y = -10
    }
    if (keys.ArrowUp.pressed){
        opponent.velocity.y = -10
    }
}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 'w':
            keys.w.pressed = true
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = true
            break
    }
})
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.w.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
    }
})