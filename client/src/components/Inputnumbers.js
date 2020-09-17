import React from 'react'

export const Inputnumbers = ({changeHandler, typedNumbers}) =>  (
  <div id="inputnumbers">
    <input placeholder="Please, enter numbers" id="Numbers" value={typedNumbers} type="text" className="validate" name="typedNumbers" onChange={(e) =>changeHandler(e, false)}/>
    <label htmlFor="Numbers">Numbers</label>
  </div>
)