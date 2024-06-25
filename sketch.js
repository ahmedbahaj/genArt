
const CRYSTAL_SIZE = 500;
const SIDES = 6;
var  PALETTE = [];
const layers = [];

function setup(){
    createCanvas(530, 530, SVG);
    noLoop();
    angleMode(DEGREES);

    PALETTE = [
        color(255, 52, 154), //pink
        color(4, 0, 152), //blue
    ]
};
var ourCircle;
function draw(){

    // ourCircle = new Circles()
    // ourCircle.render();

    // ourSimpleLine = new SimpleLines();
    // ourSimpleLine.render();

    // ourShape = new OutlineShape();
    // ourShape.render();
    // testLines();

    var picker = random(1);
    if(picker > 0.3){
        layers.push(new OutlineShape());
    }

    picker = random(1);
    if(picker > 0.3){
        layers.push(new SimpleLines());
    }

    picker = random(1);
    if(picker > 0.3){
        layers.push(new Circles());

    }

    layers.forEach(layer => {
        layer.render();
    });
}



