'use sctrict';

var sinevir_imgs = '<img id="without_sky" src="img/bg/sinevir/without_sky.png" alt="sinevir">\
        <img id="sky" src="img/bg/sinevir/sky.png" alt="sinevir">\
        <img id="bg_mount" src="img/bg/sinevir/background_mountains.png" alt="sinevir">\
        <img id="middle" src="img/bg/sinevir/middle.png" alt="sinevir">\
        <img id="first" src="img/bg/sinevir/first.png" alt="sinevir">\
        <img id="t_fr" src="img/bg/sinevir/t_fr.png" alt="sinevir">\
        <img id="trees" src="img/bg/sinevir/trees.png" alt="sinevir">\
        <img id="eagel" src="img/bg/sinevir/eagel.png" alt="sinevir">\
        <img id="blick" src="img/bg/sinevir/blick.png" alt="sinevir">';
$('#hidden-box').append(sinevir_imgs);


var canvas = document.getElementById('sinevir'),
    ctx = canvas.getContext('2d'),
    backgrounds = [],
    backgroundsUrlPrefix = 'img/bg/sinevir/',
    pointer = {
        x: 0,
        y: 0
    },
    backgroundsArr = [
        {
            id: 'without_sky',
            k: -0.01,
            ym: 100
        },
        {
            id: 'sky',
            k: 0.02,
            ym: 100
        },
        {
            id: 'bg_mount',
            k: 0.01,
            ym: 100
        },
        {
            id: 'middle',
            k: 0.03,
            ym: 100
        },
        {
            id: 'first',
            k: 0.05,
            ym: 150
        },
        {
            id: 't_fr',
            k: 0.1,
            ym: 170
        },
        {
            id: 'trees',
            k: 0.14,
            ym: 220
        },
        {
            id: 'eagel',
            k: -0.5,
            ym: 250,
            t: 'eagel',
            w: 75,
            h: 88.8,
            x: -350,
            y: 150
        }
    ];

// requestAnimationFrame polyfill
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

// Mouse Class to get the mouse coordinates
var Mouse = function (el) {
    // Public Vars
    this.el     = el || window;
    this.x      = 0;
    this.y      = 0;

    var _getPointerEvent = function(event) {
        return event.targetTouches ? event.targetTouches[0] : event;
    };

    var _setMouseCoordinates = function (e) {

        e.preventDefault();
        var pointer = _getPointerEvent(e),
            x = pointer.pageX,
            y = pointer.pageY;

        this.x = x;
        this.y = y;
    };

    
    var events = "mousernter mousemove touchstart touchenter touchmove";

    // bind events
    events.split(' ').forEach(function(eventName){
        this.el.addEventListener(eventName,_setMouseCoordinates.bind(this))
    })

    return this;
}();






// Background Class https://github.com/lamberta/html5-animation/blob/master/examples/ch05/classes/arrow.js
var Background = function (o) {
    this.x = o.x || 0;
    this.y = o.y || 0;
    this.xs = o.x || 0;
    this.ys = o.y || 0;
    this.w = o.w || canvas.width;
    this.h = o.h || canvas.height;
    this.k = o.k || 0.01;
    this.ym = o.ym || 150;
    this.t = o.t || 'bg';

    if (canvas.width*0.625 < canvas.height && this.t == 'bg') {
        this.w = canvas.height*1.6*1.1;
        this.h = canvas.height*1.1;
        this.x = -(this.w - canvas.width)/2;
        this.xs = -(this.w - canvas.width)/2;
    } else 
    if (canvas.width*0.625 > canvas.height && this.t == 'bg') {
        this.w = canvas.width*1.1;
        this.h = canvas.width*1.1*0.625;
        this.x = -(this.w - canvas.width)/2;
        this.xs = -(this.w - canvas.width)/2;
    } else if (this.t == 'blick') {
        this.x = canvas.width - this.w + o.x;
        this.xs = canvas.width - this.w + o.x;
    } else if (this.t == 'eagel') {
        this.x = canvas.width/2 - this.w/2 + o.x;
        this.xs = canvas.width/2 - this.w/2 + o.x;
    }

    this.id = o.id;
    this.img = document.getElementById(this.id);

    this.draw = function () {
        ctx.save();

        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

        ctx.restore();
    };
};



var setViewport = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
};

var createParticles = function () {
    backgrounds = [];
    for (var i = 0; i < backgroundsArr.length; i++) {
        backgrounds.push(new Background(backgroundsArr[i]));
    }
};



var loop = function (){
    render();
    window.requestAnimationFrame(loop);
};



var render = function () {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    var my_gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    my_gradient.addColorStop(0, '#8bbcf9');
    my_gradient.addColorStop(1, '#b2cbea');
    ctx.fillStyle = my_gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    var pos = canvas.getBoundingClientRect();
    var centr_x = canvas.width/2 + pos.left;
    var centr_y = canvas.height/2 + canvas.offsetTop;

    [].forEach.call(backgrounds,function(background){
        background.x = background.xs + (centr_x-Mouse.x)*background.k;
        background.y = background.ys + (centr_y-Mouse.y)*background.k;
        if (background.t == 'bg') {
            background.y = Math.min(Math.abs(background.y), background.ym);
        } else
        if (background.t == 'eagel') {
            background.y = background.ys + (centr_y-Mouse.y)*(-0.15);
        }
        background.draw();
    });
};


// Init this shit
setViewport();
createParticles();
loop();

// UI Events
window.addEventListener('resize',setViewport,false);



// // main loop
//     function run() {
//         // request next frame
//         requestAnimationFrame(run);
//         // clear screen
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         // ease pointer
//         pointer.cx += (pointer.x - pointer.cx) / 10;
//         pointer.cy += (pointer.y - pointer.cy) / 10;
//         var rx = -((canvas.width  / 2) - Math.max(15, Math.min(pointer.cx, canvas.width - 15))) / 7;
//         var ry = -((canvas.height / 2) - Math.max(0, Math.min(pointer.cy, canvas.height - 5))) / 4.75;
//         // parallax
//         parallax(0, -20 + (rx / 2), -80 + (ry * 2)); 
//         parallax(1, -40 + (rx / 2),  20 + (ry / 2)); 
//         parallax(2, -20 + (rx / 3),  90 + (ry / 3)); 
//         parallax(3, -20 - (rx / 2), 130 - (ry / 2)); 
//         parallax(4,   0 - (rx / 1), 160 - (ry / 1));
//         parallax(5, 240 - (rx * 2), 220 - (ry * 2));
//     }