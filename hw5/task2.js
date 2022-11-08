function Circle(x,y,r) {
   this.x = x;
   this.y = y;
   this.r = r;

   this.perimeter = function () {
    return 2 * Math.PI * this.r;
  }

  this.area = function () {
    return Math.PI * Math.pow(this.r, 2);
  }
}

function CirclesIntersectionArea(circle1, circle2) {
    let distance = Math.sqrt(Math.pow((circle1.x - circle2.x), 2) + Math.pow((circle1.y - circle2.y), 2));

    if (distance >= circle1.r + circle2.r) {
        return 0;
    } else if ((distance + circle2.r) <= circle1.r) {
        return circle2.getAreaOfCircle()
    } else if ((distance + circle1.r) <= circle2.r) {
        return circle1.getAreaOfCircle()
    } else {
        const F1 = 2 * Math.acos(((circle1.r * circle1.r) - (circle2.r * circle2.r) + (distance * distance)) / (2 * circle1.r * distance));
        const F2 = 2 * Math.acos(((circle2.r * circle2.r) - (circle1.r * circle1.r) + (distance * distance)) / (2 * circle2.r * distance));

        const S1 = ((circle1.r * circle1.r) * (F1 - Math.sin(F1))) / 2;
        const S2 = ((circle2.r * circle2.r) * (F2 - Math.sin(F2))) / 2;

        return S1 + S2;
    }
}

const circle1 = new Circle(1, 4, 3);
const circle2 = new Circle(3, 2, 4);

console.log(CirclesIntersectionArea(circle1,circle2))