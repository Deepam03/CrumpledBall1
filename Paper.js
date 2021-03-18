class Paper
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            friction : 0.5
            }
        this.body=Bodies.rectangle(x, y, w, h , options);
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        this.image = loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER);
			image(this.image,0,0,this.w, this.h);
			pop()
		}
}