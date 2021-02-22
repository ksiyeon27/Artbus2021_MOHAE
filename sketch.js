let playing = false;
var sky;
let button;
let deh;

function preload(){
  //deh = loadImage('assets/ll.png');
}

function setup() {
  // 여러 브라우저 지원을 위해 다양한 비디오 형식 지정
  //sky.hide();
  button1 = createButton('play');
  button1.mousePressed(toggleVid); // 버튼 리스너 붙이기
  
  var temp1 = createButton('hot');
  temp2 = createButton('warm');
  temp3 = createButton('cool');
  temp4 = createButton('cold');


  canvas = createCanvas(640,480, WEBGL);
  canvas.id('p5canvas');
  sky = createVideo(['./assets/sky.mp4', './assets/sky.webm']);
  sky.size(640, 480);
  sky.id('skyvideo');

/*   var seriously = new Seriously();

  var blur = seriously.effect('blur');

  sky.source = blur;


  seriously.go(); */

  var seriously = new Seriously();

  var src = seriously.source('#skyvideo');
  var target = seriously.target('#p5canvas');

  var blur = seriously.effect('blur');
  blur.source = src;
  target.source = blur;

  seriously.go();
}

function drawHot(){
  background('rgba(0,255,0,0.25)');
  blend(deh, 0, 0, 200, 700, 500, 0, 200, 700, ADD);
}




// 현재 상태에 따라 비디오를 재생 또는 일시 정지
function toggleVid() {
  if (playing) {
    sky.pause();
    button.html('play');
  } else {
    sky.loop();
    button.html('pause');
  }
  playing = !playing;
}