const _width = 510, _height = Math.floor(1.25 * _width);
const cols = 15, rows = 7;
let bricks = new Array(cols);

function setup() {
    createCanvas(_width, _height);
    createBricks();
}

function draw() {
    background(100);
    bricks.forEach(q => q.forEach(e => e.display()));
}

class Brick {
    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
    }

    display() {
        fill(50, 255, 0)
        rect(this.x * this.d.x, this.y * this.d.y  + 10, this.d.x, this.d.y);
    }
}

function createBricks() {
    for (let i = 0; i < cols; i++) {
        bricks[i] = new Array(rows);
        for (let j = 0; j < rows; j++) {
            bricks[i][j] = new Brick(i, j, {x: Math.floor(_width / (cols * 1.25)), y: Math.floor(_height / (rows * 10))});
        }
        
    }
}