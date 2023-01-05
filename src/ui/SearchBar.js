import React, { useState } from 'react'
import { SearchBar } from '../Components/Html'

function SearchInput(p) {

  const [array, setarray] = useState([
    { id: '1',price:100, title: 'TITLE1' },
    { id: '2',price:300, title: 'TITLE2' },
    { id: '3',price:1200, title: 'TITLE3' },
    { id: '4',price:700, title: 'TITLE4' }
  ])

  const [array2] = useState([
    { id: '1',price:40, title: 'title1am' },
    { id: '2',price:2100, title: 'sal2am' },
    { id: '3',price:8100, title: 'sal3am' },
    { id: '4',price:100, title: 'sal4am' }
  ])
 


  return (
    <SearchBar
      // icon='home'
      src={require('../assets/images/a1.jpg')}
      // navigate={'Home'}
      // Register={() => { }}
      Allarray={[...array,...array2]}
      setarray={setarray}
      array={array}
    />
  )
}
export default SearchInput



