function isBelong(p, a, b, c) {
    let a1 = (a.x - p.x) * (b.y - a.y) - (b.x - a.x) * (a.y - p.y);
    let b1 = (b.x - p.x) * (c.y - b.y) - (c.x - b.x) * (b.y - p.y);
    let c1 = (c.x - p.x) * (a.y - c.y) - (a.x - c.x) * (c.y - p.y);
    if ((a1 >= 0 && b1 >= 0 && c1 >= 0) || (a1 <= 0 && b1 <= 0 && c1 <= 0)) {
        return 1;
    }
    else {
        return 0;
    }
}
console.log(isBelong({ x: 2, y: 3 }, { x: 1, y: 1 }, { x: 2, y: 4 }, { x: 4, y: 2 }));
//# sourceMappingURL=task3.js.map