mustacheX=0;
mustacheY=0;
hatX=0;
hatY=0;
eyeX=0;
eyeY=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/mkf28YS6/m.png');
    hat=loadImage('https://i.postimg.cc/Bn4fZqpy/cowboy-hat-png-overwatch-mccree-hat-11563148592wacinshsqc.png');
    sun=loadImage('https://i.postimg.cc/cHwN46pp/sunglasses-PNG95.png')


}
function setup(){
canvas =createCanvas(300,300);
canvas.center();
video =createCapture(VIDEO);
video.size(300,300);
video.hide()
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,mustacheX,mustacheY,50,50);
    image(hat,hatX,hatY,200,140)
    image(sun,eyeX,eyeY,100,50)
   
    
}
function take_snapshot(){
save("my_custom_mustache.png");
}
function modelLoaded(){
    console.log("Posenet initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        mustacheX=results[0].pose.nose.x-20;
        mustacheY=results[0].pose.nose.y-10;
        hatX=results[0].pose.nose.x-100;
        hatY=results[0].pose.nose.y-190;
        eyeX=results[0].pose.leftEye.x-70;
        eyeY=results[0].pose.leftEye.y-30;
    }
}