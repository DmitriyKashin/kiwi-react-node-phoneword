import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Wordlist } from '../components/Wordlist'


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

it("Wordlist Loading Test", () => {
  let phoneWords = ["Horse", "Dog", "Cat"]
  let error = false;
  let loading = true;

  act(() => {
    render(<Wordlist words={phoneWords} error={error} loading={loading}/>, container);
  });

  let loader_html = container.querySelector(`#loader`);
  let error_html  = container.querySelector(`#error`);
  let data_html  = container.querySelector(`#wordlist`);


  expect(loader_html).toBeTruthy()
  expect(error_html).toBeNull()
  expect(data_html).toBeNull()

});

it("Wordlist Error Test", () => {
  let phoneWords = ["Horse", "Dog", "Cat"]
  let error = true;
  let loading = false;

  act(() => {
    render(<Wordlist words={phoneWords} error={error} loading={loading}/>, container);
  });

  let loader_html = container.querySelector(`#loader`);
  let error_html  = container.querySelector(`#error`);
  let data_html  = container.querySelector(`#wordlist`);

  expect(error_html).toBeTruthy()
  expect(loader_html).toBeNull()
  expect(data_html).toBeNull()
});

it("Wordlist Data Test", () => {
  let phoneWords = ["Horse", "Dog", "Cat"]
  let error = false;
  let loading = false;

  act(() => {
    render(<Wordlist words={phoneWords} error={error} loading={loading}/>, container);
  });

  let loader_html = container.querySelector(`#loader`);
  let error_html  = container.querySelector(`#error`);
  let data_html  = container.querySelector(`#wordlist`);
  
  expect(data_html.textContent).toBe(phoneWords.join(''))
  expect(loader_html).toBeNull()
  expect(error_html).toBeNull()

});





