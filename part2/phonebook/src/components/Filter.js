import React from 'react'

const Filter = ({nameFilter, setFilterName}) => (
  <div>
    filter shown with <input value={nameFilter} onChange={setFilterName} />
  </div>
)

export default Filter