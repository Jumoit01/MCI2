zone = function (x, y, dia) {
    this.draw = function (pressed) {
        c.beginPath();
        c.strokeStyle = "red";
        c.fillStyle = "rgba(216, 109, 106, 0.5)";
        //console.log(dia);
        c.lineWidth = "2";
        c.arc(x, y, dia, 0, Math.PI * 2, true);
        c.stroke();
        c.fill();
        c.save();
    }
};