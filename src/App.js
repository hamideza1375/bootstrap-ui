import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Init, Span } from './Components/Html'
// import Slider from './ui/Slider'
// import Button from './ui/Button'
// import B_icon from './ui/B_icon'
// import Badge from './ui/Badge'
// import Card from './ui/Card'
import Dropdown from './ui/Dropdown'
import { states, context } from './utils/context/contexts'

const App = () => {
  const allState = states()
  return (
    <Span>

    <NavigationContainer>
      <Init ref={(e) => allState.set$(e)} id={'s'} />
      {/* <Slider {...allState} /> */}
      {/* <Button {...allState} /> */}
      {/* <B_icon {...allState} /> */}
      {/* <Badge {...allState} /> */}
      {/* <Card {...allState} /> */}
      <Dropdown {...allState} />
    </NavigationContainer>
    </Span>
  )
}

export default App