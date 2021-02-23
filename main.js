 canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");

 rover_width=100;
 rover_height=90;
 rover_x=10;
 rover_y=10;
backgroud_img="mars.jpg";
rover_img="rover.png";

var mars_imgs_array=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];
var random_number=Math.floor(Math.random() * 6);

backgroud_img=mars_imgs_array[random_number];

function add_images(){
    bg_img_tag=new Image();
    bg_img_tag.onload=uploadBackground;
    bg_img_tag.src=backgroud_img;

    rover_img_tag=new Image();
    rover_img_tag.onload=uploadRover;
    rover_img_tag.src=rover_img;
}

function uploadBackground(){
    ctx.drawImage(bg_img_tag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){

    if(rover_y >= 0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed,x = "+rover_x+" y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
}

    function down(){

    if(rover_y <= 500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed,x = "+rover_x+" y = "+rover_y);
        uploadBackground();
        uploadRover();
    }
    }

    function left(){

        if(rover_x >= 0){
            rover_x=rover_x-10;
            console.log("when left arrow is pressed,x = "+rover_x+" y = "+rover_y);
            uploadBackground();
            uploadRover();
        }
    }

    function right(){

        if(rover_x <= 700){
            rover_x=rover_x+10;
            console.log("when right arrow is pressed,x = "+rover_x+" y = "+rover_y);
            uploadBackground();
            uploadRover();
        }
    }


