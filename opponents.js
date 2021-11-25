opponents = function (degree) {
    let startX = canvas.width / 2;
    let startY = canvas.height / 2;
    //let degree = Math.floor(Math.random() * 360); //270;//
    let velocity = 0.5;//canvas.width / 1500;
    let distance = canvas.width / 2;
    let dead = false;
    let radius = 15;

    const img = new Image();
    img.src = 'opponents.png';

    this.rotate = function (dist) {
        c.save();
        c.translate(startX, startY);                // x = x + 0.5 * width
                                                    // y = y + 0.5 * height
        c.rotate(degree * Math.PI / 180);
        c.translate(0, dist);
        c.drawImage(img, -(radius), -(radius), (radius * 2), (radius * 2));
        c.restore();
        c.save();
        //console.log(degree);
    }

    this.createOpp = function () {
        this.rotate(distance);
    }

    this.updateOpp = function (zone, bullXY) {


        //this.rotate(distance);
        if(!this.dead) {
            distance -= velocity;

            if (distance > (zone + radius)) {
                this.rotate(distance);
            } else {
                //c.clearRect(0,0,canvas.width, canvas.height);
                window.location.href = 'gameover.html';
            }
            c.save();
            c.restore();
        }


        let posX = startX - Math.sin(degree * Math.PI / 180) * distance;
        let posY = startY + Math.cos(degree * Math.PI / 180) * distance;



        let pos = this.pos = new Vector2(posX,posY);


        this.gotHit(bullXY);
        return pos;
    }

    this.gotHit = function (bullXY) {
        var hit;

        bX = bullXY[0];
        bY = bullXY[1];

        if (bX < (this.pos.x + (radius * 2)) && bX > (this.pos.x - (radius * 2)) && bY < (this.pos.y + (radius * 2)) && bY > (this.pos.y - (radius * 2))) {
        //if (this.pos.x < 1900) {
            hit = true;
            //c.fillStyle="white";
            //c.fillText("Hit!", 50, 50);
            //c.stroke();
            this.dead = true;
            } else {
                hit = false;
            }
    }/*
    this.reset = function (c) {
        c.clearRect(0,0,canvas.width, canvas.height);
        this.pos.x = 0;
        this.pos.y = 0;
    }
    this.dead = function () {
        var newDead = this.dead;
        console.log(newDead);
        return newDead;
    }*/
};