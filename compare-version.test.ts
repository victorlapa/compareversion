import { compare } from "./compare-version";

describe("Test samples for compare verison", () => {
  it("Testing versions without subversion", () => {
    expect(compare("11", "10")).toBeTruthy();
  });
  it("Test equal versions", () => {
    expect(compare("11", "11")).toBeTruthy();
  });
  it('Adding a subversion should make this version "larger"', () => {
    expect(compare("10.4.6", "10.4")).toBeTruthy();
  });
  it("Subversion precedence is smaller than Version", () => {
    expect(compare("10.4", "11")).toBeFalsy();
  });
  it("Version value is not the same as its decimal value", () => {
    expect(compare("10.4", "10.10")).toBeFalsy();
  });
  it("Adding subversion does not make it larger than a greater version", () => {
    expect(compare("10.4.9", "10.5")).toBeFalsy();
  });
});
