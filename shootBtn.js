shootBtn = function(width, height, dia) {

    const btn = new Image();
    btn.src = 'button.png';

    const btnPressed = new Image();
    btnPressed.src = 'button_pressed.png';


    this.draw = function (pressed) {
        c.beginPath();
        if (pressed == 0) {
            c.fillStyle = "#3a665a";
            c.strokeStyle = "green";
            //c.drawImage(btn, (-dia), (-dia), width, height);
        } else {
            c.fillStyle = "#ffff81";
            c.strokeStyle = "yellow";
            //c.drawImage(btnPressed, (-dia), (-dia), width, height);
        }
        console.log(dia);
        c.lineWidth = "8";
        c.arc(width, height, dia, 0, Math.PI * 2, true);
        c.stroke();
        c.fill();
        c.save();
        c.restore();
    }
};