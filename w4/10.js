

Rectangle.prototype.area= function(w,h){
    return(this.w * this.h);
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }
}
