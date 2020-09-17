import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Errorblock } from '../components/Errorblock'
import { Loader } from '../components/Loader'
import {Inputnumbers} from '../components/Inputnumbers';
import {Inputfilters} from '../components/Inputfilters';



let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Error block Test", () => {
  let error = 'Something is wrong';
  act(() => {
    render(<Errorblock msg={error}/>, container);
  });
  let error_html  = container.querySelector(`#error`);
  expect(error_html.textContent).toBe(error)
});

it("Loader block Test", () => {
  act(() => {
    render(<Loader/>, container);
  });
  let loader_html  = container.querySelector(`#loader`);
  expect(loader_html).toBeTruthy()
});

it("Input Numbers block Test", () => {
  let typedNumbers = "123";
  act(() => {
    render(<Inputnumbers typedNumbers={typedNumbers}/>, container);
  });
  let input_block_html  = container.querySelector(`#inputnumbers`);
  expect(input_block_html).toBeTruthy()
  let input  = container.querySelector(`#inputnumbers input`);
  expect(input.value).toBe(typedNumbers)
});
it("Input Filters block Test", () => {
  let showReal = false;
  act(() => {
    render(<Inputfilters showReal={showReal}/>, container);
  });
  let input_block_html  = container.querySelector(`#inputfilters`);
  expect(input_block_html).toBeTruthy()
  let input  = container.querySelector(`#inputfilters input`);
  expect(input.checked).toBe(showReal)

  
  showReal = true;
  act(() => {
    render(<Inputfilters showReal={showReal}/>, container);
  });
  expect(input.checked).toBe(showReal)
  
});








