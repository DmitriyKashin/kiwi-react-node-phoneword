import React, { useState, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Keyboard } from '../components/Keyboard'
import { Wordlist } from '../components/Wordlist'



export const PhonewordsPage = () => {

  const {loading, request, error } = useHttp()
  const [typedNumbers, setTypedNumbers] = useState('')
  const [showReal, setShowReal] = useState(false)
  const [phoneWords, setPhoneWords] = useState([])

  
  useEffect(() => {
    getPhonewords()
  }, [typedNumbers, showReal])

  const changeNumbersHandler = (event, number) => {
    if (number === false) {
      setTypedNumbers(event.target.value)
    } else {
      setTypedNumbers(`${typedNumbers}${number}`)
    }
  }

  const getPhonewords = async () => {
    try {
      if (typedNumbers !== '') {
        if (loading) {
          return setTimeout(getPhonewords, 100)
        }
        const params = new URLSearchParams({typedNumbers, showReal}).toString();
        const data = await request(`/api/phonewords/generate?${params}`, 'GET')
        setPhoneWords(data.phoneWords)
      } else {
        setPhoneWords([])
      }
    } catch (error) {}
  }
  
  return (
    <div>
      <h1>Phonewords Page</h1>
      <div className="row">
        <div className="input-field col xl6 l4 s12 m6">
          <div>
            <input placeholder="Please, enter numbers" id="Numbers" value={typedNumbers} type="text" className="validate" name="typedNumbers" onChange={(e) =>changeNumbersHandler(e, false)}/>
            <label htmlFor="Numbers">Numbers</label>
          </div>
          <div className="basic-margin">
            <label>
              <input type="checkbox" className="filled-in" checked={showReal}  onChange={(e) => (setShowReal(!showReal))}/>
              <span>Only real words</span>
            </label>
          </div>
          <div className="basic-margin">
           <Wordlist words={phoneWords} error={error} loading={loading}/>
          </div>
        </div>
        <div className="col xl4  l8 s12 m6 offset-xl2 keyboard">
          <Keyboard changeHandler={changeNumbersHandler}/>
        </div>
      </div>
    </div>
  )
}