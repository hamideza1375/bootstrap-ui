import React, { useState } from 'react'
import { SearchBar } from '../Components/Html'

function SearchInput(p) {

  const [array] = useState([
    { id: '1', title: 'TITLE1' },
    { id: '2', title: 'TITLE2' },
    { id: '3', title: 'TITLE3' },
    { id: '4', title: 'TITLE4' }
  ])

  const [array2] = useState([
    { id: '1', title: 'title1am' },
    { id: '2', title: 'sal2am' },
    { id: '3', title: 'sal3am' },
    { id: '4', title: 'sal4am' }
  ])
 
  // //! Asc
  // //! Asc

  return (
    <SearchBar
      icon='home'
      // src={require('../assets/images/a1.jpg')}
      // foodAsc={()=>{}}
      navigate={'Home'}
      Register={() => { }}
      array={[...array,...array2]}

    />
  )
}
export default SearchInput



