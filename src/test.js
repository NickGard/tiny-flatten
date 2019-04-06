const { flatten } = require("./index");
const { expect } = require("chai");

describe("flatten", () => {
  it("returns a flat array", () => {
    const arr = [1, 2, 3];
    expect(flatten(arr)).to.deep.equal(arr);
  });
  it("flattens multidimensional arrays", () => {
    const arr = [1, [2, 3], [4, [5]]];
    const expected = [1, 2, 3, 4, [5]];
    expect(flatten(arr)).to.deep.equal(expected);
  });
});
