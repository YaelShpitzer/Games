function confetti() {
    //canvas init
    var canvas = document.getElementById("confetti");
    var ctx = canvas.getContext("2d");

    COLORS = [
      [238, 96, 169],
      [68, 213, 217],
      [245, 187, 152],
      [144, 148, 188],
      [235, 234, 77]
    ];

    //canvas dimensions
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //particles
    var mp = 100; //max particles
    var particles = [];
    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: Math.random() * 4 + 1, //radius
            d: Math.random() * mp //density
        })
    }

    // Draw the shapes
    function drawCircle() {

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "rgba(" + COLORS[Math.floor(Math.random() * 5 + 0)] + ", 0.8)";
        ctx.beginPath();
        for (var i = 0; i < mp; i++) {
            var p = particles[i];

            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);

        }
        ctx.fill();
        update();

    }

    function drawTriangle() {

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "rgba(" + COLORS[2] + ", 0.8)";
        ctx.beginPath();
        for (var i = 0; i < mp; i++) {
            var p = particles[i];

            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + 15, p.y);
            ctx.lineTo(p.x + 15, p.y + 15);
            ctx.closePath();

        }
        ctx.fill();
        update();

    }

    function drawLine() {
        ctx.clearRect(0, 0, W, H);
        ctx.strokeStyle = "rgba(" + COLORS[3] + ", 0.8)";
        ctx.beginPath();
        for (var i = 0; i < mp; i++) {
            var p = particles[i];

            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x, p.y + 20);
            ctx.lineWidth = 2;

        }
        ctx.stroke();
        update();
    }

    function update() {

        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            p.y += Math.cos(p.d) + 1 + p.r / 2;
            p.x += Math.sin(0) * 2;

            if (p.x > W + 5 || p.x < -5 || p.y > H) {
                particles[i] = {
                    x: Math.random() * W,
                    y: -10,
                    r: p.r,
                    d: p.d
                };
            }
        }
    }

    function drawShapes() {
        drawTriangle();
        drawLine();
        drawCircle();
    }

    //animation loop
    setInterval(drawShapes, 33);

}