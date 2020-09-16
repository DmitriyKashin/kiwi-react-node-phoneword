import React from 'react'
import config from '../config/default'

export const Keyboard = ({changeHandler}) => 
{
  return config.buttons.map((item, i) => (
    <div className="col s4" key={`button-${item.number}`} >
      <div className={item.symbols.length?"waves-effect waves-light btn-small":"btn-small disabled"} onClick={(e) => changeHandler(e, item.number)}>
        <span className="number">{item.number}</span><br/>
        <span className="symbols">
          {config.buttons[i].symbols.map(item => (
            <React.Fragment key={`char-${item}`}>&nbsp;{item}</React.Fragment>
          ))}
        </span>
      </div>
    </div>
  ));
}