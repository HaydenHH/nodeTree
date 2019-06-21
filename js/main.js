let q,pt;
let w,h;

let getPoint = ()=>{
    let x = mouseX + Math.random() * displayWidth/2 * PN()
    let y = mouseY + Math.random() * displayHeight/2 * PN()
    
    return {x:x,y:y}
}

class point {
  coor(x,y){
    this.x = x;
    this.y = y 
  }
}

let graC = (a,b,c)=>{
  let from = color(a);
  let to = color(b);
  return lerpColor(from,to,c)
};

let coor_cir = (x,y,r,angle)=>{
  let cX=x + r * cos(angle * PI / 180);
  let cY = y + r * sin(angle * PI /180)
  return {x:cX,y:cY}
}

let is_click = false;
let key_q = false,
    key_w = false

let a,b,fill_ori


function preload(){
   // cup =  loadModel('/cup.obj',true);
}

function setup() {
  frameRate(100)
    createCanvas(window.innerWidth,window.innerHeight);
    q = 100

   

}

function mouseClicked(){
  if(!is_click){
    frameCount = 0
    is_click = true
  }else{
    is_click = false
  }
}

function keyPressed(){
  if(keyIsDown(81)){
    key_q = true
  }else if(keyIsDown(87)){
    key_w = true
  }
}

function keyReleased(){
  if(!keyIsDown(81)){
    key_q = false
  }else if(!keyIsDown(87)){
    key_w = false
  }
}


  
  
  
  


  function draw() {
    let w = windowWidth,
    h = windowHeight;
    // if(key_q){
    //   a = color('red')
    // }else{
    //   a = color('black')
    // }
    // if(key_w){
    //   b = color('yellow')
    // }else{
    //   b = color('black')
    // }
  
    // let bdColor = lerpColor(a, b, 0.5)

    background('white')
    if(is_click){
      fill(color('blue'))
      // noFill()
      stroke(color('blue'))
      let [w,h] = [displayWidth,displayHeight]
      let  [mX,mY] = [mouseX,mouseY]
      let pt = coor_cir(mX+150,mY+150,100,frameCount*2);
      beginShape();
      vertex(mouseX,mouseY);
      
      bezierVertex(pt.y,pt.x,  pt.x, pt.y,mouseX+300,mouseY+300);
      
      bezierVertex(pt.x, pt.y,pt.y+300,pt.x-300,mouseX,mouseY);
      endShape();  
    }

    
    
   
    
   
    
  }