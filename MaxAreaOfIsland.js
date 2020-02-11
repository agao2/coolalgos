// iterate through the the grid
// if its a 1 , recursively explore adjacent nodes to find the area of island

const maxAreaOfIsland = (grid) => {
    let maxArea = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let area = getArea(grid,i,j)
            maxArea = Math.max(area, maxArea)
        }
    }
    return maxArea
}

const getArea = (grid, x, y) => {
    if (x >= grid.length || x < 0)
        return 0
    if (y >= grid[x].length || y < 0)
        return 0

    if (grid[x][y] !== 1)
        return 0

    grid[x][y] = -1;
    let up = getArea(grid, x + 1, y)
    let left = getArea(grid, x, y - 1)
    let right = getArea(grid, x, y + 1)
    let down = getArea(grid, x - 1, y)
    return (up + left + right + down + 1)
}


console.log(maxAreaOfIsland(
    [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
))