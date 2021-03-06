/**
 * Author:      Yannick Huggler
 * Game-Name:   Space-Invaders-Remastered
 * Descriptiom: A remastered version of the classic space-invaders.
 * Filename:    enemy.js
 */

function Enemy() {
    this.x = getRandomInt(10, canvas.width - 10);
    this.y = getRandomInt(10, canvas.height - 250);
    this.w = 20;
    this.h = 20;

    this.show = function() {
        var image = new Image();
        image.src = "img/enemy.png";
        ctx.drawImage(image, this.x, this.y);
    }

    this.move = function() {
        var dirX = getRandomInt(-1, 1);
        var dirY = getRandomInt(-1, 1);

        if(this.x > canvas.width - 10) dirX = -1;
        if(this.x < 10) dirX = 1;
        if(this.y > canvas.width - 200) dirY = -1;
        if(this.y < 10) dirY = 1;
        
        this.x += dirX * 10;
        this.y += dirY * 10;
    }

    this.isShooting = function() {
        var rand = getRandomInt(1, 150);
        return rand == 10;
    }
}