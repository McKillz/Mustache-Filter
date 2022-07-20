noseX = 0;
noseY = 0;


function preload(){
mustache = loadImage("mustache.png");


}


function setup(){

    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);

}

function draw(){
    image(video, 0, 0, 500, 500);
    image(mustache, noseX -100, noseY -20, 200, 100);
    

}

function take_snapshot(){
    save("mustache_img.png");
}

function modelLoaded(){
    console.log("PoseNet is Loaded");
}

function gotPoses(results){
    if(results.length > 0) 
    {
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }

}