function hexagon(posX, posY, radius){
    const rotAngle = 360 / 6;
    beginShape();
    for(var i = 0; i < 6; ++i){
        const thisVertix = pointOnCircle(posX, posY, radius, i * rotAngle);
        vertex(thisVertix.x, thisVertix.y);
    }
    endShape(CLOSE);
}

function pointOnCircle(posX, posY, radius, angle){
    const x = posX + radius * cos(angle);
    const y = posY + radius * sin(angle);

    return createVector(x, y);
}
   

function randomSelectTwo(){
    const rando = random(1);
    if(rando > 0.5){
        return true;
    } else {
        return false;
    }
}

function getRandomFromPalette() {
    const rando2 = floor(random(0, PALETTE.length));
    return PALETTE[rando2];
}

function testLines(){
    strokeWeight(3);
    var numShapes = randomSelectTwo() ? SIDES : SIDES * 2;

    const strokeColor = getRandomFromPalette();
    noFill();
    stroke(PALETTE[0]);
    strokeWeight(1);
    push();
        translate(width/2, height/2);
        ellipse(0, 0, CRYSTAL_SIZE); 
        stroke(strokeColor);
        const angle = 360 / numShapes;
        for(var i = 0; i < numShapes; ++i){
            line(0, 0, 0, CRYSTAL_SIZE / 2);
            rotate(angle); 
        }
    pop();
}
