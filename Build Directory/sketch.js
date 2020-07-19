function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", setup);

function collidePointRect(px, py, rx1, ry1, rx2, ry2){
  if (px >= rx1 && px <= rx1 + Math.abs(rx1 - rx2) && py >= ry1 && py <= ry1 + Math.abs(ry1 - ry2)){
    return true
  }
  else {
    return false  
  }
}

function collidePointCircle(px, py, cx, cy, r){
  distance = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2)
  
  if (distance <= r){
    return true
    
  }
  else{
    return false
  }
}


function collideRectCircle(cx, cy, rx1, ry1, rx2, ry2, r, points){
  
  let x = []
  let y = []
  
  if (collidePointCircle(rx1, ry1, cx, cy, r)){
    return true
  }
  else if (collidePointCircle(rx2, ry1, cx, cy, r)){
    return true
  }
  else if (collidePointCircle(rx2, ry2, cx, cy, r)){
    return true
  }
  else if (collidePointCircle(rx1, ry2, cx, cy, r)){
    return true
  }
  
  
  
  for (let i = -(points/4); i < points/4 + 1; i++){
      let xVal = (r*2)/(points/2) * i + cx
      x.push(xVal)
      x.push(xVal)
      y.push(cy + Math.sqrt(r**2 - (xVal - cx)**2))
      y.push(cy - Math.sqrt(r**2 - (xVal - cx)**2))
    
  }
  
  for (let i = 0; i < x.length; i++){
      if (collidePointRect(x[i], y[i], rx1, ry1, rx2, ry2)){
        
        return true
      }
    // print(x)
  
  
  }
  return false
  
}

let collide = false

let widthRect = 10

let heightRect = 10

function draw() {
  stroke("black")
  background(220);
  
  
  
  collide = collideRectCircle(400, 400, mouseX, mouseY, Math.abs(mouseX - widthRect), Math.abs(mouseY - heightRect), 50, 180)
  
  print(collide)
  
  if (collide){
    stroke("red")
  }
  
  circle(400, 400, 100)
  
  rect(mouseX, mouseY, heightRect, widthRect)
  // rect(300, 300, 10, 10)
  
  // circle(mouseX, mouseY, 100)
}