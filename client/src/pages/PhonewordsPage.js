import React, { useState, useEffect, useCallback } from 'react'
import config from '../config/default'

import { useHttp } from '../hooks/http.hook'

import { Keyboard } from '../components/Keyboard'
import { Inputnumbers } from '../components/Inputnumbers'
import { Inputfilters } from '../components/Inputfilters'

import { Wordlist } from '../components/Wordlist'


export const PhonewordsPage = () => {

  const {loading, request, error } = useHttp()
  const [typedNumbers, setTypedNumbers] = useState('')
  const [showReal, setShowReal] = useState(false)
  const [phoneWords, setPhoneWords] = useState([])

  
  const getPhonewords = useCallback(async () => {
    try {
      if (typedNumbers !== '') {
        const params = new URLSearchParams({typedNumbers, showReal}).toString();
        const data = await request(`/api/phonewords/generate?${params}`, 'GET')
        setPhoneWords(data.phoneWords)
      } else {
        setPhoneWords([])
      }
    } catch (error) {}
  }, [request, typedNumbers, showReal])

  useEffect(() => {
    getPhonewords()
  }, [typedNumbers, showReal, getPhonewords])

  const changeNumbersHandler = (event, number) => {
    if (number === false) {
      setTypedNumbers(event.target.value)
    } else {
      setTypedNumbers(`${typedNumbers}${number}`)
    }
  }
  
  return (
    <div>
      <h1>Phonewords Page</h1>
      <div className="row">
        <div className="input-field col xl6 l4 s12 m6">
          <Inputnumbers changeHandler={changeNumbersHandler} typedNumbers={typedNumbers} />
          <Inputfilters setShowReal={setShowReal} showReal={showReal} />
          <Wordlist words={phoneWords} error={error} loading={loading}/>
        </div>
        <div className="col xl4  l8 s12 m6 offset-xl2 keyboard">
          <Keyboard changeHandler={changeNumbersHandler} buttons={config.buttons}/>
        </div>
      </div>
    </div>
  )
}