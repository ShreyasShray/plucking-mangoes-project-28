class Mango{
    constructor(x, y, radius){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius*2;
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
    }

    display(){
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}