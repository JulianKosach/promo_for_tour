'use sctrict';

// device detection
var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
console.log('isMobile = ' + isMobile);


function initCanvasImg() {
    var sinevir_imgs = '<img id="without_sky" src="img/bg/sinevir/without_sky.png" alt="sinevir">\
            <img id="sky" src="img/bg/sinevir/sky.png" alt="sinevir">\
            <img id="bg_mount" src="img/bg/sinevir/background_mountains.png" alt="sinevir">\
            <img id="middle" src="img/bg/sinevir/middle.png" alt="sinevir">\
            <img id="first" src="img/bg/sinevir/first.png" alt="sinevir">\
            <img id="t_fr" src="img/bg/sinevir/t_fr.png" alt="sinevir">\
            <img id="trees" src="img/bg/sinevir/trees.png" alt="sinevir">\
            <img id="eagel" src="img/bg/sinevir/eagel.png" alt="sinevir">';
    $('#hidden-box').append(sinevir_imgs);
};


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
            y: 200
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
    var centr_y = canvas.height*0.7;

    [].forEach.call(backgrounds,function(background){
        background.x = background.xs + (centr_x-Mouse.x)*background.k;
        background.y = background.ys + (centr_y-Mouse.y)*background.k*0.6;
        if (background.t == 'bg') {
            background.y = Math.min(background.y, background.ym);
        } else
        if (background.t == 'eagel') {
            background.y = background.ys + (centr_y-Mouse.y)*(-0.15);
        }
        background.draw();
    });
};


// Init this shit
if (!isMobile) {
    initCanvasImg();

    setViewport();
    createParticles();
    loop();

    // UI Events
    window.addEventListener('resize',setViewport,false);
} else {
    $('sinevir').css('display', 'none');
}