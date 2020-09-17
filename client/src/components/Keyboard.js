import React from 'react'

export const Keyboard = ({changeHandler, buttons}) => 
{
  return buttons.map((item, i) => (
    <div className="col s4" key={`button-${item.number}`} >
      <div className={item.symbols.length?"waves-effect waves-light btn-small":"btn-small disabled"} id={`keyboard-button-${item.number}`} onClick={(e) => changeHandler(e, item.number)}>
        <span className="number">{item.number}</span><br/>
        <span className="symbols" id={`keyboard-button-symbols-${item.number}`}>
          {buttons[i].symbols.map((item,k) => (
            <React.Fragment key={`char-${item}`}>{item}{(k === (buttons[i].symbols.length-1)?'':' ')}</React.Fragment>
          ))}
        </span>
      </div>
    </div>
  ));
}