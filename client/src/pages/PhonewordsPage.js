import React, { useState } from 'react'
import en_keyboard from '../config/en_keyboard'


export const PhonewordsPage = () => {
  const [typedNumbers, setTypedNumbers] = useState('')
  const changeHandler = (event, number) => {
    console.log(typedNumbers)
    if (number === false) {
      setTypedNumbers(event.target.value)
    } else {
      setTypedNumbers(`${typedNumbers}${number}`)
    }
    console.log(typedNumbers)
  }
  const buttonItems  = en_keyboard.buttons.map((item, i) => (
    <div className="col s4" key={`button-${item.number}`} onClick={(e) => changeHandler(e, item.number)}>
      <div className="waves-effect waves-light btn-small">
        <span className="number">{item.number}</span><br/>
        <span className="symbols">
          {en_keyboard.buttons[i].symbols.map(item => (
            <React.Fragment key={`char-${item}`}>&nbsp;{item}</React.Fragment>
          ))}
        </span>
      </div>
    </div>
  ));
  return (
    <div>
      <h1>Phonewords Page</h1>
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Please, enter numbers" id="Numbers" value={typedNumbers} type="text" className="validate" onChange={(e) =>changeHandler(e, false)}/>
          <label htmlFor="Numbers">Numbers</label>
        </div>
        <div className="col xl4  l8 s12 m6">
          {buttonItems}
        </div>
      </div>
    </div>
  )
}