import React from 'react'

export const Inputfilters = ({setShowReal, showReal}) =>  (
  <div className="basic-margin" id="inputfilters">
    <label>
      <input type="checkbox" className="filled-in" checked={showReal}  onChange={(e) => (setShowReal(!showReal))}/>
      <span>Only real words</span>
    </label>
  </div>
)