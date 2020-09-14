type Board = ReadonlyArray<string>;
type Position = readonly [number, number];

const range = (l: number): readonly number[] => [...Array(l).keys()];

const isMine = (pos: Position, board: Board): boolean =>
  board[pos[0]][pos[1]] === '*';

const isValidPosition = (pos: Position, board: Board): boolean =>
  pos[0] >= 0 &&
  pos[0] < board.length &&
  pos[1] >= 0 &&
  pos[1] < board[0].length;

const neighboringPositions = (
  pos: Position,
  board: Board
): readonly Position[] => {
  const row = pos[0];
  const col = pos[1];

  const possiblePositions: ReadonlyArray<Position> = [
    [row - 1, col - 1],
    [row - 1, col],
    [row - 1, col + 1],
    [row, col - 1],
    [row, col + 1],
    [row + 1, col - 1],
    [row + 1, col],
    [row + 1, col + 1],
  ];

  return possiblePositions.reduce(
    (filtered, p) => (isValidPosition(p, board) ? [...filtered, p] : filtered),
    [] as readonly Position[]
  );
};

const neighboringMines = (pos: Position, board: Board): number =>
  neighboringPositions(pos, board).reduce(
    (fil, p) => (isMine(pos, board) ? [...fil, p] : fil),
    [] as readonly Position[]
  ).length;

const annotatePosition = (pos: Position, board: Board): string =>
  isMine(pos, board)
    ? '*'
    : neighboringMines(pos, board) > 0
    ? neighboringMines(pos, board).toString()
    : ' ';

const annotateRow = (row: number, board: Board): string =>
  range(board[0].length)
    .map((col) => annotatePosition([row, col], board))
    .join('');

export const annotate = (board: Board): Board =>
  range(board.length).map((row) => annotateRow(row, board));
