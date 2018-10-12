import React from "react";
import { shallow } from "enzyme";
import List from "components/List";

describe("List", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<List />);
  });

  it("It should render <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("it should render <ol/>", () => {
    expect(wrapper.find("ol").length).toEqual(1);
  });

  it("it should render <li/>", () => {
    expect(wrapper.find("li").length).toEqual(4);
  });
});
