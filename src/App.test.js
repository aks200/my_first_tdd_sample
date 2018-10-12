import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import ListContainer from "container/ListContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("It should render <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("It should render ListContainer", () => {
    expect(wrapper.containsMatchingElement(<ListContainer />)).toEqual(true);
  });
});
