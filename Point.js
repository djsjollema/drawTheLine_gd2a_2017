class Point {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.color = color;
  };
  draw(canvas) {
    context.beginPath();
    context.fillStyle = this.color;
    context.lineWidth = 4
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    context.stroke();
    context.fill();
    context.closePath();
  }
  drag() {
    let dragStatus = false;
    let rect = canvas.getBoundingClientRect();
    addEventListener("mousedown", (evt) => {
      let mousePosition = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      }
      let dx, dy;
      dx = mousePosition.x - this.x;
      dy = mousePosition.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.r) {
        dragStatus = true;
      } else {
        dragStatus = false;
      }
    })
    addEventListener('mousemove',(evt)=>{
      let mousePosition = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      }
      if(dragStatus){
        this.x = mousePosition.x;
        this.y = mousePosition.y;
      }
    });
    addEventListener('mouseup',()=>{
      dragStatus = false;
    })

  }
}
