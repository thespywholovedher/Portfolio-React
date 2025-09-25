import { copyArray2d } from "./ArrayUtil";

export const Grid_3x3 = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
];

export const Grid_5x5 = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
];

export const toggleCell = (grid:boolean[][], x:number, y:number) => {
    const gridCopy = copyArray2d(grid);
    const size = grid.length;
    gridCopy[x][y] = !grid[x][y];


    if (x - 1 >= 0) grid[x-1][y] = !grid[x-1][y]
    if (x + 1 < size) grid[x+1][y] = !grid[x+1][y]

    if (y - 1 >= 0) gridCopy[x][y-1] = !grid[x][y-1];
    if (y + 1 < size) gridCopy[x][y+1] = !grid[x][y+1]

    return gridCopy
}

export type GameState = {
    grid: boolean[][],
    offCounter: number
}

export const createGame = (small:string): GameState => {
    return {
        grid: small === "small" ? Grid_3x3 : Grid_5x5,
        offCounter: 0
    }
}

export type Index = {
    x:number,
    y:number
}

export type Action<T> = {
    type:string,
    payload: T
}


export const reducer = (state:GameState | undefined, action:Action<Index> | undefined) => {
    if(action === undefined || state === undefined) throw new Error();
    switch (action.type) {
        case 'TOGGLE':
            console.log("click")
            return {
                grid:toggleCell(state.grid, action.payload.x, action.payload.y),
                offCounter: 0
            };

    }
}