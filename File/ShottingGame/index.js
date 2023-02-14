const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const ScoreEl = document.getElementById('ScoreEl');
const BigScoreEl = document.getElementById('BigScoreEl');
const StartGameBtn = document.getElementById('StartGameBtn');
const Over_nav = document.getElementById('Over-nav');

var Clicked = 0;
var StartClicked = true;

setInterval(() => {
    if(Clicked > 0) {
        Clicked--;
    } else {
        StartClicked = true;
    }
}, 100)

// Cài đặt canvas

canvas.width = innerWidth;
canvas.height = innerHeight;

canvas.style.backgroundColor = 'black';

//install

var projectiles = [];
var paricles = [];
var enemeis = [];
var score = 0;

var mouseX = 0;
var mouseY = 0;

var clown = 0;
var maxClown = 8;
var startShot = false;
var autoShot = false;

//Người chơi

function RandomFloor(cost) {
    return Math.floor(Math.random() * cost);
}

class Player{
    constructor(x, y, size, color, side) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.side = side;
        this.angle = 0;
    }
    draw() {
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        // ctx.closePath();
        // ctx.fillStyle = this.color;
        // ctx.fill();
        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));
        ctx.beginPath();
        ctx.moveTo(0, this.size);
        for(var i = 0; i < this.side; i += 1) {
            ctx.rotate(360 / this.side * (Math.PI / 180));
            ctx.lineTo(0, this.size);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    update() {
        this.draw();
    }
}

const player = new Player(canvas.width / 2, canvas.height / 2, 20, 'white', 3);

// Projectile Dan

class Projectile{
    constructor(x, y, color, size, velocity, angle, side) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.velocity = velocity;
        this.angle = angle;
        this.side = side;
    }
    draw() {
        // circle

        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        // ctx.closePath();
        // ctx.fillStyle = this.color;
        // ctx.fill();

        // drone

        // ctx.save();
        // ctx.strokeStyle = 'white';
        // ctx.lineWidth = 5;
        // ctx.fillStyle = this.color;
        // ctx.translate(this.x, this.y);
        // ctx.beginPath();
        // ctx.rotate(this.angle + -10);
        // ctx.moveTo(0, this.size);
        // ctx.rotate(120 * (Math.PI / 180));
        // ctx.lineTo(0, this.size);
        // ctx.rotate(120 * (Math.PI / 180));
        // ctx.lineTo(0, this.size);
        // ctx.rotate(120 * (Math.PI / 180));
        // ctx.lineTo(0, this.size);
        // ctx.closePath();
        // ctx.fill();
        // ctx.stroke();
        // ctx.restore();

        // beta

        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));
        ctx.beginPath();
        ctx.moveTo(0, this.size);
        for(var i = 0; i < this.side; i += 1) {
            ctx.rotate(360 / this.side * (Math.PI / 180));
            ctx.lineTo(0, this.size);
        }
        ctx.closePath();
        // ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

// enemy

class Enemy{
    constructor(x, y, color, size, velocity, angle, side) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.velocity = velocity;
        this.angle = angle;
        this.side = side;
    }
    draw() {
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        // ctx.closePath();
        // ctx.fillStyle = this.color;
        // ctx.fill();
        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));
        ctx.beginPath();
        ctx.moveTo(0, this.size);
        for(var i = 0; i < this.side; i += 1) {
            ctx.rotate(360 / this.side * (Math.PI / 180));
            ctx.lineTo(0, this.size);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    update() {
        this.draw();
        this.x -= this.velocity.x;
        this.y -= this.velocity.y;
    }
}

class Paricle{
    constructor(x, y, color, size, velocity, side) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.velocity = velocity;
        this.angle = 0;
        this.side = side;
        this.alpha = 1;
    }
    draw() {
        // ctx.save();
        // ctx.globalAlpha = this.alpha;
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        // ctx.closePath();
        // ctx.fillStyle = this.color;
        // ctx.fill();
        // ctx.restore();
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * (Math.PI / 180));
        ctx.beginPath();
        ctx.moveTo(0, this.size);
        for(var i = 0; i < this.side; i += 1) {
            ctx.rotate(360 / this.side * (Math.PI / 180));
            ctx.lineTo(0, this.size);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    update() {
        this.draw();
        this.velocity.x *= 0.99;
        this.velocity.y *= 0.99;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

function SpawnEnemy() {
    setInterval(() => {
        const side = 2 + RandomFloor(10);
        const radius = Math.floor(Math.random() * (30 - 4) + 4);
        let x;
        let y;

        const color = `hsl(${Math.random() * 360}, 50%, 50%)`;

        if(Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius * side : canvas.width + radius * side;
            y = Math.random() * canvas.height;
        } else {
            x = Math.random() * canvas.width;
            y = Math.random() < 0.5 ? 0 - radius * side : canvas.height + radius * side;
        }

        const angle = Math.atan2(y - canvas.height / 2, x - canvas.width / 2);
        const velocity = {
            x: (Math.cos(angle) * 10) / side,
            y: (Math.sin(angle) * 10) / side,
        }
        enemeis.push(new Enemy(x, y, color, radius * side, velocity, angle, side));
    }, 3000)
}

function SpawnEnemySpeed() {
    setInterval(() => {
        if(score > 20000) {
            const side = 4;
            const radius = 100;
            let x;
            let y;

            const color = 'red';

            if(Math.random() < 0.5) {
                x = Math.random() < 0.5 ? 0 - radius * side : canvas.width + radius * side;
                y = Math.random() * canvas.height;
            } else {
                x = Math.random() * canvas.width;
                y = Math.random() < 0.5 ? 0 - radius * side : canvas.height + radius * side;
            }

            const angle = Math.atan2(y - canvas.height / 2, x - canvas.width / 2);
            const velocity = {
                x: (Math.cos(angle) * 4),
                y: (Math.sin(angle) * 4),
            }
            enemeis.push(new Enemy(x, y, color, radius, velocity, angle, side));
        }
    }, 20000)
}

let animateId;
function animate() {
    ScoreEl.innerHTML = score;
    animateId = requestAnimationFrame(animate);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    player.angle += 4;
    if(Clicked > 5) {
        StartClicked = false;
        alert('Stop Auto Click!');
    }
    paricles.forEach((paricle, index) => {
        if(paricle.alpha > 0) {
            paricle.update();
            paricle.angle += 6;
            paricle.alpha -= 0.01;
        } else {
            setTimeout(() => {
                paricles.splice(index, 1);
            }, 0)
        }
    })
    projectiles.forEach((projectile, index) => {
        projectile.update();
        projectile.angle += 2 * 2;
        if(projectiles.side < 2) {
            setTimeout(() => {
                projectiles.splice(index, 1);
            }, 0)
        }
        if(projectile.x - projectile.size < 0 || projectile.x + projectile.size > canvas.width) {
            projectile.side = projectile.side - 1;
            projectile.velocity.x = -projectile.velocity.x;
        }
        if(projectile.y - projectile.size < 0 || projectile.y + projectile.size > canvas.height) {
            projectile.side = projectile.side - 1;
            projectile.velocity.y = -projectile.velocity.y;
        }
    })
    enemeis.forEach((enemy, index) => {
        enemy.update();
        enemy.angle += 2 * 1;
        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        if(dist - player.size - enemy.size < 1) {
            cancelAnimationFrame(animateId);
            BigScoreEl.innerHTML = score;
            Over_nav.style.display = 'block';
        }
        projectiles.forEach((projectile, indexProjectile) => {
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
            if(dist - enemy.size - projectile.size< 1) {
                for(var i = 0; i < 10; i++) {
                    paricles.push(new Paricle(enemy.x, enemy.y, enemy.color, Math.random() * enemy.size / 5, {x: (Math.random() - 0.5) * (Math.random() * (enemy.size / 4)), y: (Math.random() - 0.5) * (Math.random() * (enemy.size / 4))}, enemy.side));
                }
                if(projectile.size >= 8) {
                    const angle = Math.atan2(projectile.y - enemy.y, projectile.x - enemy.x);
                    projectiles.push(new Projectile(projectile.x, projectile.y, enemy.color, projectile.size / 2, {x: Math.cos(angle - 0.5) * 5, y: Math.sin(angle - 0.5) * 5}, projectile.angle, enemy.side));
                    projectiles.push(new Projectile(projectile.x, projectile.y, enemy.color, projectile.size / 2, {x: Math.cos(angle + 0.5) * 5, y: Math.sin(angle + 0.5) * 5}, projectile.angle, enemy.side));
                }
                if(enemy.size - projectile.size > 5) {
                    score += 50;
                    if(enemy.color != 'red') {
                        gsap.to(enemy, {
                            size: enemy.size - projectile.size,
                        })
                    } else {
                        gsap.to(enemy, {
                            size: enemy.size - projectile.size / 2,
                        })
                    }
                    setTimeout(() => {
                        projectiles.splice(indexProjectile, 1);
                    }, 0)
                } else {
                    score += 150;
                    player.side = enemy.side;
                    if(enemy.color == 'red') {
                        if(projectile.size >= 8) {
                            for(var i = 0; i < 64; i++) {
                                const angle = Math.atan2(projectile.y - enemy.y, projectile.x - enemy.x);
                                projectiles.push(new Projectile(projectile.x, projectile.y, enemy.color, player.size, {x: Math.cos(angle + i / 10) * 5, y: Math.sin(angle + i / 10) * 5}, projectile.angle, enemy.side));
                            }
                            setTimeout(() => {
                                projectiles.splice(indexProjectile, 1);
                                enemeis.splice(index, 1);
                            }, 0)
                        }
                    } else {
                        setTimeout(() => {
                            projectiles.splice(indexProjectile, 1);
                            enemeis.splice(index, 1);
                        }, 0)
                    }
                }
            }
        })
    })
    if(startShot || autoShot) {
        if(clown <= 0) {
            const angle = Math.atan2(mouseY - canvas.height / 2, mouseX - canvas.width / 2);
            const velocity = {
                x: Math.cos(angle) * 10,
                y: Math.sin(angle) * 10,
            }

            if(score >= 100000) {
                if(score >= 500000) {
                    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, player.color, player.size * 4, velocity, player.angle, player.side));
                } else {
                    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, player.color, player.size * 2, velocity, player.angle, player.side));
                projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, player.color, player.size, {x: Math.cos(angle + 0.8) * 10, y: Math.sin(angle + 0.8) * 10}, player.angle, player.side));
                projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, player.color, player.size, {x: Math.cos(angle - 0.8) * 10, y: Math.sin(angle - 0.8) * 10}, player.angle, player.side));
                }
            } else {
                projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, player.color, player.size, velocity, player.angle, player.side));
            }
            clown = maxClown;
        } else {
            clown--;
        }
    }
}

function init() {
    score = 0;
    player.side = 90;
    enemeis = [];
    projectiles = [];
    paricles = [];
    ScoreEl.innerHTML = score;
    BigScoreEl.innerHTML = score;
}

StartGameBtn.addEventListener('click', () => {
    init();
    animate();
    SpawnEnemy();
    SpawnEnemySpeed();
    Over_nav.style.display = 'none';
})

addEventListener('mousedown', () => {
    startShot = true;
})

addEventListener('mouseup', () => {
    startShot = false;
})

 addEventListener('keydown', ({key}) => {
     switch (key) {
         case 'e':
             if(autoShot) {
                 autoShot = false;
             } else {
                 autoShot = true;
             }
             startShot = false;
             break;
     }
 })

// resize

window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
})

// mouse change

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
})