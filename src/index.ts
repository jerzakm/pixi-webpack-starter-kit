import { Application, Graphics } from 'pixi.js'

const app = new Application({
    backgroundColor: 0x121212,
    width: 800,
    height: 600,
    autoStart: false
})

document.body.appendChild(app.view)

let x = app.renderer.width/2
let y = app.renderer.height/2

const g = new Graphics()
app.stage.addChild(g)

g.beginFill(0xFFAA12, 1)
g.drawCircle(x,y, 64)
g.endFill()
