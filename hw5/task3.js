const circle = {
    x: 1,
    y: 2,
    r: 5,
}

const point = {
    x: 1,
    y: 2
}


function PointCircle(circle, point) {
    return Math.pow((point.x - circle.x), 2) + Math.pow((point.y - circle.y), 2) <= Math.pow(circle.r, 2);
}

console.log(PointCircle(circle, point))