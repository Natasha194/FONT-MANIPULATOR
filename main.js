noseX = 0;
noseY = 0;
difference = 0;
leftWrist = 0;
rightWrist = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(460, 460);
    canvas = createCanvas(400, 350)
    canvas.position(500, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#0d3b55');

    document.getElementById("square_side").innerHTML = "Width & Height of the square will be - " + difference;
    textSize(difference);
    text('NATASHA', noseX, noseY);
    fill(0, 0, 0);
}

function modelLoaded() {
    console.log('model Loaded!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + "nose Y = " + noseY);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("left wrist = " + leftWrist + "right wrist = " + rightWrist + "difference = " + difference);
    }
}

