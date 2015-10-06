// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 5 + 1) * 101;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505) {
        this.x += this.speed * dt;
    }
    else {
        this.x = -80;
    }

//collision
    var enemyLeft = this.x - 50;
    var enemyRight = this.x + 50;
    var enemyTop = this.y - 50;
    var enemyBottom = this.y + 50;
    if (player.x > this.x - 50 && player.x < this.x + 50 && player.y > this.y - 50 && player.y < this.y + 50) {
        player.resetPos();
    }
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var playerInitPos = [200, 400];

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = playerInitPos[0];
    this.y = playerInitPos[1];
};

Player.prototype.update = function() {

};

Player.prototype.resetPos = function() {
    this.x = playerInitPos[0];
    this.y = playerInitPos[1];

    alert("Game Over");
    document.location.reload();
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(ctrlKey) {
    if (ctrlKey === "left" && this.x > 0) {
        this.x -= 101;
    }
    else if (ctrlKey === "right" && this.x < 505) {
        this.x += 101;
    }
    else if (ctrlKey === "up" && this.y > 0) {
        this.y -= 83;
    }
    else if (ctrlKey === "down" && this.y < 606) {
        this.y += 83;
    }
    else {
        this.move = null;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for (var i = 0; i < 3; i++) {
    allEnemies.push(new Enemy(- 60 + 101 * i, 60 + 83 * i));
}
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
