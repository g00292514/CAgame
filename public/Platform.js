function Platform(x,y,width,height,vx,vy,g) {
    this.x = Math.random()*360;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vx = vx;
    this.vy = vy;
    this.g = g;
}
Platform.prototype.draw = function (){
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    // createPlatform()
};

Platform.prototype.tick = function () {
    this.y -= this.vy;
    if (checkCollision(this, ball)){
        ball.vy = Math.abs(ball.vy);
    }
    //console.log(checkCollision(this, ball));
};






startPlatform =[];
startPlatform[0] = new Platform(0,750,40,10,0,-.5,0);
startPlatform[1] = new Platform(0,700,40,10,0,-.5,0);
startPlatform[2] = new Platform(0,680,40,10,0,-.5,0);
startPlatform[3] = new Platform(0,600,40,10,0,-.5,0);
startPlatform[4] = new Platform(0,530,40,10,0,-.5,0);
startPlatform[5] = new Platform(0,400,40,10,0,-.5,0);
startPlatform[6] = new Platform(0,230,40,10,0,-.5,0);
startPlatform[7] = new Platform(0,320,40,10,0,-.5,0);
startPlatform[8] = new Platform(0,420,40,10,0,-.5,0);
