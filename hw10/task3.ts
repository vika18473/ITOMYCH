interface coordinates {
    x: number,
    y: number
}

function isBelong(p:coordinates, a: coordinates , b:coordinates , c:coordinates){
   
    let a1:number = (a.x-p.x)*(b.y-a.y)-(b.x-a.x)*(a.y-p.y)
    let b1:number = (b.x-p.x)*(c.y-b.y)-(c.x-b.x)*(b.y-p.y)
    let c1:number = (c.x-p.x)*(a.y-c.y)-(a.x-c.x)*(c.y-p.y)
        if((a1>=0 && b1>=0 && c1>=0)||(a1 <= 0 && b1 <= 0 && c1 <= 0)){
            return 1
        }else{
            return 0
        }

}

console.log(isBelong({x: 2, y: 3},{x: 1, y: 1},{x: 2, y: 4},{x: 4, y: 2}))