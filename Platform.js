function Platform(x,y,width,height,vx,vy,g) {
    this.x = this.x = Math.random()*400;
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
