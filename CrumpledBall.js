class CrumpledBall{
    constructor(x,y,radius){
     var options={
      isStatic:false,
        restitution:0.3,
      friction:0.5,
         density:1.2
     }

     this.image=loadImage("paper.png")
     this.radius=radius
     this.x=x
     this.y=y
     this.body=Bodies.circle(this.x,this.y,this.radius/2,options)
     World.add(world,this.body)

    
    }

    display(){
        var pos=this.body.position
        
        push();
       translate(pos.x,pos.y) 
       imageMode(CENTER)
       image(this.image,0, 0, this.radius, this.radius);    
        pop();

       
        

    }
}