const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function convertSeen(seen: boolean[][]): void {
  let output = "";
  for (let i = 0; i < seen.length; i++) {
    output += seen[i].join(",") + "\n";
  }

  console.log(output);
}

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: any[][],
  path: Point[],
  count: number,
): boolean {
  // 1. BASE CASES
  //  - off the map
  if (
    curr.x < 0 ||
    curr.x > maze[0].length ||
    curr.y < 0 ||
    curr.y > maze.length
  ) {
    return false;
  }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // on the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    convertSeen(seen);
    return true;
  }

  // is seen
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 3. RECURSE
  // pre
  count++;
  seen[curr.y][curr.x] = count;
  path.push(curr);

  //recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (
      walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path, count)
    ) {
      convertSeen(seen);
      return true;
    }
  }

  // post
  path.pop();
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: any[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path, 0);

  return path;
}
