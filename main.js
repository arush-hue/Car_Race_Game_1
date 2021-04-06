canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width= 120;
car1_heigth= 70;
car1_image= "car1.png";
car1_x= 10;
car1_y= 10;

car2_width= 120;
car2_heigth= 70;
car2_image= "car1 (1).png";
car2_x= 10;
car2_y= 100;
background_img="image2.jpeg";
function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=upload_background;
    background_imgTag.src=background_img;

    car1_imgTag=new Image();
    car1_imgTag.onload=upload_car1;
    car1_imgTag.src=car1;

    car2_imgTag=new Image();
    car2_imgTag.onload=upload_car2;
    car2_imgTag.src=car2;
}
function upload_background()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function upload_car1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_heigth);
}

function upload_car1()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_heigth);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keycode;
    console.log(keyPressed);
    if (keyPressed=='38')
    {
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed=='40')
    {
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed=='37')
    {
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed=='39')
    {
        car1_right();
        console.log("right arrow key");
    }

    if (keyPressed=='87')
    {
        car1_up();
        console.log("W");
    }
    if (keyPressed=='83')
    {
        car1_down();
        console.log("S");
    }
    if (keyPressed=='65')
    {
        car1_leftp();
        console.log("A");
    }    if (keyPressed=='68')
    {
        car1_right();
        console.log("D");
    }
}