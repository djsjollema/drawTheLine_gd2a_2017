class Line {
  constructor(slope,yIntercept) {
    this.slope = slope;
    this.yIntercept = yIntercept;
  }

  calcY(x){
    return x*this.slope + this.yIntercept;
  }
}
