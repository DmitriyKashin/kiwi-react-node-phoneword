import React, { useState, useEffect } from 'react'
import config from '../config/default'
import { useHttp } from '../hooks/http.hook'


export const PhonewordsPage = () => {
  const {loading, request, error} = useHttp()
  const [typedNumbers, setTypedNumbers] = useState('')
  const [showReal, setShowReal] = useState(false)
  const [phoneWords, setPhoneWords] = useState([])


  const changeHandler = (event, number) => {
    if (number === false) {
      setTypedNumbers(event.target.value)
    } else {
      setTypedNumbers(`${typedNumbers}${number}`)
    }
  }
  useEffect(() => {
    console.log('here')
    getPhonewords()
  }, [typedNumbers, showReal])
  const getPhonewords = async () => {
    try {
      if (typedNumbers) {
        const params = new URLSearchParams({typedNumbers, showReal}).toString();
        const data = await request(`/api/phonewords/generate?${params}`, 'GET')
        setPhoneWords(data.phoneWords)
      }
    } catch (error) {
      console.log('error', error)
    }
  }
  const phoneWordsList = phoneWords.map((word, i) => <li className="collection-item" key={`word${i}`}>{word}</li>)
  const buttonItems  = config.buttons.map((item, i) => (
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
  return (
    <div>
      <h1>Phonewords Page</h1>
      <div className="row">
        <div className="input-field col xl6 l4 s12 m6">
          <div>
            <input placeholder="Please, enter numbers" id="Numbers" value={typedNumbers} type="text" className="validate" name="typedNumbers" onChange={(e) =>changeHandler(e, false)}/>
            <label htmlFor="Numbers">Numbers</label>
          </div>
          <div className="basic-margin">
            <label>
              <input type="checkbox" className="filled-in" checked={showReal}  onChange={(e) => (setShowReal(!showReal))}/>
              <span>Only real words</span>
            </label>
          </div>
          <div className="basic-margin">
          <ul className="collection">
            {phoneWordsList}
          </ul>
          </div>
        </div>
        <div className="col xl4  l8 s12 m6 offset-xl2 keyboard">
          {buttonItems}
        </div>
      </div>
    </div>
  )
}