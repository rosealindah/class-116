var nose_x=0
var nose_y=0

function preload() { 
    clown_nose=loadImage("https://i.postimg.cc/vH7GzCf4/d3086558665c07c38cc8ebe8ed33003a.jpg");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes)
}

function draw() {
    image(video, 0, 0, 300, 300); 
    /*fill(255,0,0);
    stroke (0,255,0);
    circle(nose_x, nose_y, 20)*/
    image(clown_nose, nose_x, nose_y, 70,70)
}
function take_snapshot() {
    save('my_pic.png')
}

function modelLoaded() {
    console.log("posenetmodel has been intialized");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x=results[0].pose.nose.x-20;
        nose_y=results[0].pose.nose.y-20;
        console.log("nose x=" + nose_x);
        console.log("nose y=" + nose_y);
    }
}