var b,
    txt,
    addScroll,
    pX,
    pY,
    theLayer;

b = navigator.appName;
addScroll = false;
txt = "";
pX = 0;
pY = 0;

if ( ( navigator.userAgent.indexOf( 'MSIE 5' ) > 0 ) || ( navigator.userAgent.indexOf(
        'MSIE 6' ) ) > 0 ) {
    addScroll = true;
}

document.onmousemove = mouseMove;

if ( b === "Netscape" ) {
    document.captureEvents( Event.MOUSEMOVE );
}

function mouseMove( evn ) {
    if ( b === "Netscape" ) {
        pX = evn.pageX - 5;
        pY = evn.pageY;
    } else {
        pX = event.x - 5;
        pY = event.y;
    }

    if ( b === "Netscape" ) {
        if ( document.layers[ 'Tool Tip' ].visibility === 'show' ) {
            PopTip();
        }
    } else {
        if ( document.all[ 'Tool Tip' ].style.visibility === 'visible' ) {
            PopTip();
        }
    }
}

function PopTip() {
    if ( b === "Netscape" ) {
        theLayer = eval( 'document.layers[\'Tool Tip\']' );

        if ( ( pX + 120 ) > window.innerWidth ) {
            pX = window.innerWidth - 150;
        }

        theLayer.left = pX + 10;
        theLayer.top = pY + 15;
        theLayer.visibility = 'show';
    } else {
        theLayer = eval( 'document.all[\'Tool Tip\']' );

        if ( theLayer ) {
            pX = event.x - 5;
            pY = event.y;
            if ( addScroll ) {
                pX = pX + document.body.scrollLeft;
                pY = pY + document.body.scrollTop;
            }

            if ( ( pX + 120 ) > document.body.clientWidth ) {
                pX = pX - 150;
            }

            theLayer.style.pixelLeft = pX + 10;
            theLayer.style.pixelTop = pY + 15;
            theLayer.style.visibility = 'visible';
        }
    }
}

function HideTip() {
    var args = HideTip.arguments;

    if ( b === "Netscape" ) {
        document.layers[ 'Tool Tip' ].visibility = 'hide';
    } else {
        document.all[ 'Tool Tip' ].style.visibility = 'hidden';
    }

}

function HideMenu1() {
    if ( b === "Netscape" ) {
        document.layers[ 'menu 1' ].visibility = 'hide';
    } else {
        document.all[ 'menu 1' ].style.visibility = 'hidden';
    }
}

function ShowMenu1() {
    if ( b === "Netscape" ) {
        theLayer = eval( 'document.layers[\'menu 1\']' );
        theLayer.visibility = 'show';
    } else {
        theLayer = eval( 'document.all[\'menu 1\']' );
        theLayer.style.visibility = 'visible';
    }
} //

function HideMenu2() {
    if ( b === "Netscape" ) {
        document.layers[ 'menu 2' ].visibility = 'hide';
    } else {
        document.all[ 'menu 2' ].style.visibility = 'hidden';
    }
}

function ShowMenu2() {
    if ( b === "Netscape" ) {
        theLayer = eval( 'document.layers[\'menu 2\']' );
        theLayer.visibility = 'show';
    } else {
        theLayer = eval( 'document.all[\'menu 2\']' );
        theLayer.style.visibility = 'visible';
    }
}
// fostata
