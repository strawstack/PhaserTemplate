var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    backgroundColor: "#333", // game background color
    physics: {
        default: 'matter',
        matter: {
            gravity: {x: 0, y: 0},
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //this.load.image('bunny', 'img/bunny.png');
}

let p1, p2;

function create ()
{
    // setting Matter world bounds
    this.matter.world.setBounds(0, 0, game.config.width, game.config.height);

    this.input.on("pointerdown", function(pointer) {

        let x = pointer.upX;
        let y = pointer.upY;
        console.log("x:", x - 100, " y:", y - 300);

    }, this);

    // Constants
    let SPRING = 0.001; // 0.05

    // Collision catagories
    let cat1 = this.matter.world.nextCategory();
    let cat2 = this.matter.world.nextCategory();

    // A
    let g1 = this.add.graphics({x: 300, y: 150, add: true});

    // draw a shape
    g1.fillStyle(0xffffff, 0.1);
    g1.lineStyle(4, 0xffffff, 1);
    g1.moveTo(-29.5, -92);
    g1.lineTo(82.5, -54.5);
    g1.lineTo(82.5, 59.5);
    g1.lineTo(-29.5, 97.5);
    g1.lineTo(-99.5, 2.5);
    g1.closePath();
    g1.strokePath();
    g1.fillPath();

    this.matter.add.gameObject(g1, { shape: { type: 'polygon', radius: 100, sides: 5 } });
    //g1.setStatic(true);

    // g1 join
    let m1 = this.add.graphics({x: 300, y: 150, add: true});
    this.matter.add.gameObject(m1, { shape: { type: 'circle', radius: 10} });
    m1.setStatic(true);
    g1.setCollisionCategory(cat1);
    m1.setCollisionCategory(cat2);
    g1.setCollidesWith(cat1);
    this.matter.add.constraint(g1, m1, 0, SPRING);

    // B
    let g2 = this.add.graphics({x: 400, y: 400, add: true});

    // draw a shape
    g2.fillStyle(0xffffff, 0.1);
    g2.lineStyle(4, 0xffffff, 1);
    g2.moveTo(1.5, -47.5);
    g2.lineTo(44.5, -22.5);
    g2.lineTo(44.5, 28.5);
    g2.lineTo(1.5, 52.5);
    g2.lineTo(-42.5, 27.5);
    g2.lineTo(-42.5, -21.5);
    g2.closePath();
    g2.strokePath();
    g2.fillPath();

    this.matter.add.gameObject(g2, { shape: { type: 'polygon', radius: 50, sides: 6 } });
    //g2.setStatic(true);

    // g2 join
    let m2 = this.add.graphics({x: 400, y: 400, add: true});
    this.matter.add.gameObject(m2, { shape: { type: 'circle', radius: 10} });
    m2.setStatic(true);
    g2.setCollisionCategory(cat1);
    m2.setCollisionCategory(cat2);
    g2.setCollidesWith(cat1);
    this.matter.add.constraint(g2, m2, 0, SPRING);

    // C
    let g3 = this.add.graphics({x: 200, y: 400, add: true});

    // draw a shape
    g3.fillStyle(0xffffff, 0.1);
    g3.lineStyle(4, 0xffffff, 1);
    g3.moveTo(-23.5, -72.5);
    g3.lineTo(65.5, -44.5);
    g3.lineTo(65.5, 48.5);
    g3.lineTo(-22.5, 78.5);
    g3.lineTo(-78.5, 2.5);
    g3.closePath();
    g3.strokePath();
    g3.fillPath();

    this.matter.add.gameObject(g3, { shape: { type: 'polygon', radius: 80, sides: 5 } });
    //g3.setStatic(true);

    // g3 join
    let m3 = this.add.graphics({x: 200, y: 400, add: true});
    this.matter.add.gameObject(m3, { shape: { type: 'circle', radius: 10} });
    m3.setStatic(true);
    g3.setCollisionCategory(cat1);
    m3.setCollisionCategory(cat2);
    g3.setCollidesWith(cat1);
    this.matter.add.constraint(g3, m3, 0, SPRING);

    // P1
    p1 = this.add.graphics({x: 100, y: 300, add: true});

    // draw a shape
    p1.fillStyle(0x03ffff, 0.2);
    p1.lineStyle(3, 0x03ffff, 1);
    p1.moveTo(-13.5, 2.5);
    p1.lineTo(8.5, -10.5);
    p1.lineTo(5.5, 2.5);
    p1.lineTo(7.5, 14.5);
    p1.closePath();
    p1.strokePath();
    p1.fillPath();

    this.matter.add.gameObject(p1, { shape: { type: 'polygon', radius: 15, sides: 3 } });
    //p1.setStatic(true);

    p1.setCollisionCategory(cat1);
    p1.setMass(100);
    p1.setAngle(180);

    // P2
    p2 = this.add.graphics({x: 500, y: 300, add: true});

    // draw a shape
    p2.fillStyle(0xe066ff, 0.2);
    p2.lineStyle(3, 0xe066ff, 1);
    p2.moveTo(-13.5, 2.5);
    p2.lineTo(8.5, -10.5);
    p2.lineTo(5.5, 2.5);
    p2.lineTo(7.5, 14.5);
    p2.closePath();
    p2.strokePath();
    p2.fillPath();

    this.matter.add.gameObject(p2, { shape: { type: 'polygon', radius: 15, sides: 3 } });
    //p2.setStatic(true);

    p2.setCollisionCategory(cat1);
    p2.setMass(100);
    //p2.setAngle(180);

    /*
    poly.setVelocity(4, -2);
    poly.setBounce(1);
    poly.setFriction(0, 0, 0);
    poly.setFrictionAir(0.005); */

}

function mag(v) {
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
}

function norm(v) {
    let m = mag(v);
    return {x: v.x / m, y: v.y / m};
}

function mult(v, m) {
    return {x: v.x * m, y: v.y * m};
}

function update() {

    let maxV = 1;

    // Player One Controls
    if (this.input.keyboard.addKey('w').isDown) {
        p1.thrustBack(0.1);
        if (mag(p1.body.velocity) > maxV) {
            let newV = mult(norm(p1.body.velocity), maxV);
            p1.setVelocity(newV.x, newV.y);
        }
    }

    if (this.input.keyboard.addKey('a').isDown) {
        // Rotate left
        p1.setAngle(p1.angle - 3);

    } else if (this.input.keyboard.addKey('d').isDown) {
        // Rotate right
        p1.setAngle(p1.angle + 3);
    }

    // Dampen angular velocity
    p1.setAngularVelocity(0);

    // Player Two Controls
    if (this.input.keyboard.addKey('up').isDown) {
        p2.thrustBack(0.1);
        if (mag(p2.body.velocity) > maxV) {
            let newV = mult(norm(p2.body.velocity), maxV);
            p2.setVelocity(newV.x, newV.y);
        }
    }

    if (this.input.keyboard.addKey('left').isDown) {
        // Rotate left
        p2.setAngle(p2.angle - 3);

    } else if (this.input.keyboard.addKey('right').isDown) {
        // Rotate right
        p2.setAngle(p2.angle + 3);
    }

    // Dampen angular velocity
    p2.setAngularVelocity(0);


}
