function resetCanvas (e) {
    // resize the canvas - but remember - this clears the canvas too.
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    halfWidth = canvas.width/2;
    halfHeight = canvas.height/2;

    //make sure we scroll to the top left.
    window.scrollTo(0,0);
}

function onTouchStart(e) {

    for(var i = 0; i<e.changedTouches.length; i++){
        var touch =e.changedTouches[i];
        //console.log(leftTouchID + " "
        if((leftTouchID<0) && (touch.clientX<halfWidth))
        {
            leftTouchID = touch.identifier;
            leftTouchStartPos.reset(touch.clientX, touch.clientY);
            leftTouchPos.copyFrom(leftTouchStartPos);
            leftVector.reset(0,0);
            continue;
        } else {

            makeBullet();

        }
    }
    touches = e.touches;
}

function onTouchMove(e) {
    // Prevent the browser from doing its default thing (scroll, zoom)
    //e.preventDefault();

    for(var i = 0; i<e.changedTouches.length; i++){
        var touch =e.changedTouches[i];
        if(leftTouchID == touch.identifier)
        {
            leftTouchPos.reset(touch.clientX, touch.clientY);
            leftVector.copyFrom(leftTouchPos);
            leftVector.minusEq(leftTouchStartPos);
            break;
        }
    }

    touches = e.touches;

}

function onTouchEnd(e) {

    touches = e.touches;

    for(var i = 0; i<e.changedTouches.length; i++){
        var touch =e.changedTouches[i];
        if(leftTouchID == touch.identifier)
        {
            leftTouchID = -1;
            leftVector.reset(0,0);
            break;
        }
    }

}

function onMouseMove(event) {

    mouseX = event.offsetX;
    mouseY = event.offsetY;
}