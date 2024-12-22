function printCoord(pt: { x: number; y: number; z?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  if (pt.z !== undefined) {
    console.log("The coordinate's z value is " + pt.z);
  }
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3, y: 7, z: 10 });
//Alternative solution with type assertion
function printCoord2(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({x:3,y:7, z:10} as {x:number; y:number});