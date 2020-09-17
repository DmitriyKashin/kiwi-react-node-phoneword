import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Keyboard } from '../components/Keyboard'
import { PhonewordsPage } from '../pages/PhonewordsPage'

import config from '../config/default'


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

it("Render Keyboard Buttons", () => {
  act(() => {
    render(<Keyboard  buttons={config.buttons}/>, container);
  });
  // check each button from our config
  config.buttons.map(button => {
    expect(container.querySelector(`#keyboard-button-symbols-${button.number.replace(/(\*|\#)/g,'\\$1')}`).textContent).toBe(button.symbols.join(' '))
  })
});

it("Changing Input Values By Button Click", () => {
  const onChange = jest.fn();

  act(() => {
    render(<PhonewordsPage />, container);
  });

  const input = container.querySelector((`#Numbers`));
  let checkstring = '';
  config.buttons.map(button => {
    let html_button = container.querySelector((`#keyboard-button-${button.number.replace(/(\*|\#)/g,'\\$1')}`));
    act(() => {
      html_button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    checkstring = `${checkstring}${button.number}`; 
    expect(input.value).toBe(checkstring);
  })

});

