import { whichTriangle } from './triangle';

describe('Triangle', () => {
  it('equilateral triangles have equal sides', () => {
    expect(whichTriangle([2, 2, 2])).toEqual('equilateral');
  });

  it('larger equilateral triangles also have equal sides', () => {
    expect(whichTriangle([10, 10, 10])).toEqual('equilateral');
  });

  it('isosceles triangles have last two sides equal', () => {
    expect(whichTriangle([3, 4, 4])).toEqual('isosceles');
  });

  it('isosceles trianges have first and last sides equal', () => {
    expect(whichTriangle([4, 3, 4])).toEqual('isosceles');
  });

  it('isosceles triangles have two first sides equal', () => {
    expect(whichTriangle([4, 4, 3])).toEqual('isosceles');
  });

  it('isosceles triangles have in fact exactly two sides equal', () => {
    expect(whichTriangle([10, 10, 2])).toEqual('isosceles');
  });

  it('scalene triangles have no equal sides', () => {
    expect(whichTriangle([3, 4, 5])).toEqual('scalene');
  });

  it('scalene triangles have no equal sides at a larger scale too', () => {
    expect(whichTriangle([10, 11, 12])).toEqual('scalene');
  });

  it('scalene triangles have no equal sides in descending order either', () => {
    expect(whichTriangle([5, 4, 2])).toEqual('scalene');
  });

  it('very small triangles are legal', () => {
    expect(whichTriangle([0.4, 0.6, 0.3])).toEqual('scalene');
  });

  it('test triangles with no size are illegal', () => {
    expect(whichTriangle([0, 0, 0])).toEqual("That's not a triangle!");
  });

  it('triangles with negative sides are illegal', () => {
    expect(whichTriangle([3, 4, -5])).toEqual("That's not a triangle!");
  });

  it('triangles violating triangle inequality are illegal', () => {
    expect(whichTriangle([1, 1, 3])).toEqual("That's not a triangle!");
  });

  it('triangles violating triangle inequality are illegal 2', () => {
    expect(whichTriangle([7, 3, 2])).toEqual("That's not a triangle!");
  });

  it('triangles violating triangle inequality are illegal 3', () => {
    expect(whichTriangle([10, 1, 3])).toEqual("That's not a triangle!");
  });
});
