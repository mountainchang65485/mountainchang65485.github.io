(function () {
    var numberOfBalls = 15;
    var ballVelocity = 2;
    var minRadius = 15;
    var maxRadius = 35;
    var ballColour = ''; //Leave blank for random colours.
    var milliSeconds = 30;

    var then = performance.now();
    var h, w, balls = [], ballCoords = [];
    var scy = 0;
    var scx = 0;
    var d = document;

    function scrl(a) {
        var y, x;
        y = window.pageYOffset;
        x = window.pageXOffset;
        return (a == 0) ? y : x;
    }

    function initscroll() {
        scy = scrl(0);
        scx = scrl(1);
    }

    function randomColour() {
        var rgb = [];
        for (var i = 0; i < 3; i++) {
            var gen = Math.random() * 255|0;
            rgb.push(gen);
        }
        return (typeof ballColour == 'undefined' || ballColour == '')?'rgb('+rgb.toString()+')':ballColour;
    }

    function win() {
        var tmp = d.documentElement.clientWidth;
        var ch = (typeof tmp == 'number');
        var sc = (ch) ? window.innerWidth - tmp : 0;
        h = window.innerHeight - 1;
        w = window.innerWidth - sc -1;
    }

    function xy (a, s) {
        return (a * s / 100);
    }

    function createBall(y,x) {
        var r = minRadius + Math.random() * maxRadius|0;
        var ball = d.createElement('div');
        ball.setAttribute('style', 'display:block;'
            +'position:absolute;'
            +'height:'+r+'px;'
            +'width:'+r+'px;'
            +'top:0px;left:0px;'
            +'background-color:'+randomColour()+';'
            +'border-radius:50%;'
            );

        d.body.appendChild(ball);
        balls.push(ball);
        ballAttr(r,y,x);
    }

    function ballAttr(rad,y,x) {
        var b = {
        r: rad * 0.5,
        m: rad * 0.5,
        x: x, 
        y: y, 
        vx: -ballVelocity + Math.random() * (ballVelocity * 2), 
        vy: -ballVelocity + Math.random() * (ballVelocity * 2)};
        ballCoords.push(b);
    }

    function animate() {
        for (var i = 0; i < balls.length; i++) {
            var b = ballCoords[i];
            b.x += b.vx;
            b.y += b.vy;
        }
    }

    function borderCollisions() {
        for (var i = 0; i < balls.length; i++) {
            b = ballCoords[i];
            if (b.x > w - b.r) {
                b.x = w - b.r;
                b.vx *= -1;
            }
            else if (b.x < b.r) {
                b.x = b.r;
                b.vx *= -1;
            }

            if (b.y > h - b.r) {
                b.y = h - b.r;
                b.vy *= -1;
            }
            else if (b.y < b.r) {
                b.y = b.r;
                b.vy *= -1;
            }
        }
    }

    function collisions() {
        for (var i = 0; i < balls.length; i++) {
            var b1 = ballCoords[i];
            for (var j = i + 1; j < balls.length; j++) {
                var b2 = ballCoords[j];

                var dx = b1.x - b2.x;
                var dy = b1.y - b2.y;
                var len = dx * dx + dy * dy;
                var min = b1.r + b2.r;
                var mind = min * min;            
                var ca = Math.atan2(dy, dx);

                if (len < mind) {

                    var dist = Math.sqrt(len);

                    var factor = (dist - min) / dist;
                    b1.x -= dx * factor * 0.5;
                    b1.y -= dy * factor * 0.5;
                    b2.x += dx * factor * 0.5;
                    b2.y += dy * factor * 0.5;

                    var v1 = Math.sqrt(b1.vx * b1.vx + b1.vy * b1.vy);
                    var v2 = Math.sqrt(b2.vx * b2.vx + b2.vy * b2.vy);

                    var a1 = Math.atan2(b1.vy, b1.vx);
                    var a2 = Math.atan2(b2.vy, b2.vx);

                    var rvx1 = v1 * Math.cos(a1-ca);
                    var rvy1 = v1 * Math.sin(a1-ca);
                    var rvx2 = v2 * Math.cos(a2-ca);
                    var rvy2 = v2 * Math.sin(a2-ca);

                    var evx1 = ((b1.m - b2.m) * rvx1 + (b2.m + b2.m) * rvx2) / (b1.m + b2.m);
                    var evx2 = ((b1.m + b1.m) * rvx1 + (b2.m - b1.m) * rvx2) / (b1.m + b2.m);
                    var evy1 = rvy1;
                    var evy2 = rvy2;

                    b1.vx =  Math.cos(ca) * evx1 + Math.cos(ca + Math.PI/2) * evy1;
                    b1.vy =  Math.sin(ca) * evx1 + Math.sin(ca + Math.PI/2) * evy1;
                    b2.vx =  Math.cos(ca) * evx2 + Math.cos(ca + Math.PI/2) * evy2;
                    b2.vy =  Math.sin(ca) * evx2 + Math.sin(ca + Math.PI/2) * evy2;
                }
            }
        }
    }

    function assignToHTML() {
        for (var i = 0; i < balls.length; i++) {
            var b = ballCoords[i];
            balls[i].style.transform = 'translate3d('+(b.x - b.r + scx)+'px, '+(b.y - b.r + scy)+'px, 0)';
        }
    }

    function run() {
        var now = performance.now();
        if ((now - then) > milliSeconds) {
            animate();
            collisions();
            borderCollisions();
            assignToHTML();
            then = performance.now();
        }
        window.requestAnimationFrame(run);
    } 

    function start() {
        win();
        for (var i = 0; i < numberOfBalls; i++) {
            createBall(Math.random() * h,Math.random() * w);
        }
        run();
    }

    window.addEventListener("load", start, false);
    window.addEventListener("resize", win, false);
    window.addEventListener("scroll", initscroll, false);

})();