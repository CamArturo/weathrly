import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Suggestions from "../lib/Suggestions";
import "./css/welcome.scss";

configure({adapter: new Adapter()});

describe("Suggestions Component", () => {
  let renderedApp;
  const props = {
    suggestions:
      ["Dearborn heights, mi", "Detroit, mi", "Denton, tx", "Des moines, ia", "Des plaines, il", "Desoto, tx", "Dearborn, mi", "Denver, co", "Deltona, fl", "Delray beach, fl"]
  };

  renderedApp = shallow(<Suggestions  {...props} />);

  it("should exist", () => {
    expect(renderedApp).toBeDefined();
  });

  it("should render the datalist element", () => {
    expect(renderedApp.find("#suggestions-datalist"));
  });

  it("should render datalist with 10 options", () => {
    const props = {
      suggestions:
        ["Dearborn heights, mi", "Detroit, mi", "Denton, tx", "Des moines, ia", "Des plaines, il", "Desoto, tx", "Dearborn, mi", "Denver, co", "Deltona, fl", "Delray beach, fl"]
    };
    renderedApp = mount(<Suggestions  {...props} />);
    // expect(renderedApp.find('option'));
    expect(renderedApp.find("option").length).toEqual(10);
  });
});