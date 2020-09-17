import React from 'react'
import {Loader} from '../components/Loader'
import { Errorblock } from './Errorblock'

export const Wordlist = ({words, error , loading}) => {

  if (loading) {
    return <Loader/>
  }

  if (error) {
    return <Errorblock msg = {error} />
  }

  return (
    <div className="basic-margin">
      <ul className="collection" id="wordlist">
        {words.map((word, i) => <li className="collection-item" key={`word${i}`}>{word}</li>)}
      </ul>
    </div>
  )
}