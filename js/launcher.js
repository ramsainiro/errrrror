class launcher{
constructor(body,pointB){
    var options = {bodyA:body,
        pointB:pointB ,
        stiffness=0.002,
        length:1,
    }
this.bodyA=body
this.pointB = pointB
this.launcher = Constraint.create(options)
World.add(world,this.launcher)




}
display(){


if(this.launcher.bodyA){
var pointA=this.bodyA.position,
var pointB= this.pointB
strokeWeight(2)
line(pointA.x,pointA.y,pointB.x,pointB.y)
}


}

fly(){

    this.launcher.bodyA=null;
}
attach(body){
this.launcher.bodyA=body


}
    
}










