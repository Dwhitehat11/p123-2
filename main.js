function setup() {
    video = createCapture(VIDEO);
    video.size(560,150);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}
function draw() {
    background('#969A97');
}
function gotPoses(result)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}