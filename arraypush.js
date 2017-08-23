 "use strict";

const arr1=[];
arr1.push(2,3,4,5);
console.log(arr1);
//object keys
let pObj1={a1:2,
a2:3}
 const pObj2 = Object.keys(pObj1);
 console.log(pObj2)


//Final array with nonUniqueElements
    //data is an input array
function nonUniqueElements(data) {

    let counts = {}, results = [];

    data.forEach(el => counts[el] = (counts[el] || 0) + 1);

    //console.log(counts);

    data.forEach(el => {

        if (counts[el] > 1) {

            results.push(el);

        }

    });
    console.log(counts)
    return results;

}

console.log(nonUniqueElements([1,1,2,2,3,4,4]))

// sort array
let samplearray= [1,3,2,4,6,5];
let samplength = samplearray.length
let sortedarray = samplearray.sort()
let median = (sortedarray[samplength/2]+sortedarray[samplength/2-1])/2;
console.log(median);

//Board game
let board = [[1, 0, 0, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0],
            [0, 0, 1, 0, 0]];

console.log(board[1][2]);


function findfullneigbours(grid, row, column){
NEIGHBORS = [[-1, -1], [-1, 0], [-1, 1], [0, -1],
              [0, 1], [1, -1], [1, 0], [1, 1]];
  var count = 0
NEIGHBORS.forEach((diff)=>{
  n_row = row + diff[0]
  n_col = col + diff[1]
  if (0 <= n_row && n_row < grid.length &&
      0 <= n_col && n_col < grid[n_row].length) {
      if (grid[n_row][n_col]) {
          count += 1
      }
  }
  return count
})
}
