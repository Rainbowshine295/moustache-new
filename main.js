noseX = 0;
noseY = 0;

function preload() {
moustache = loadImage("https://i.postimg.cc/g2jSyyVk/moustache.png");
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()  {
    console.log("poseNet initialized! :D");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y - 70;
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}



function draw() {
    image(video, 0,0,300,300);
    image(moustache, noseX, noseY, 150,75);
    
}
function take_snapshot() {
    save('moustacheFilter.png');
}