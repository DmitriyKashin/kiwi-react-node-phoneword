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
    <ul className="collection">
      {words.map((word, i) => <li className="collection-item" key={`word${i}`}>{word}</li>)}
    </ul>
  )
}