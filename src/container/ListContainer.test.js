import React from "react";
import { shallow } from "enzyme";
import List from "components/List";
import ListContainer from "container/ListContainer";

describe("ListContainer", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ListContainer />);
  });

  it("It should render <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("it should render list component", () => {
    expect(wrapper.containsMatchingElement(<List />)).toEqual(true);
  });
});
