import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Init, Span } from './Components/Html'
// import Slider from './ui/Slider'
// import Button from './ui/Button'
// import B_icon from './ui/B_icon'
// import Badge from './ui/Badge'
// import Card from './ui/Card'
// import Dropdown from './ui/Dropdown'
// import Input from './ui/Input'
// import LinearGradient from './ui/LinearGradient'
// import List from './ui/List'
// import Loading from './ui/Loading'
// import MaskedView from './ui/MaskedView'
// import Modal from './ui/Modal'
import Switch from './ui/Switch'
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
      {/* <Dropdown {...allState} /> */}
      {/* <Input {...allState} /> */}
      {/* <LinearGradient {...allState} /> */}
      {/* <List {...allState} /> */}
      {/* <Loading {...allState} /> */}
      {/* <MaskedView {...allState} /> */}
      {/* <Modal {...allState} /> */}
      <Switch {...allState} />
    </NavigationContainer>
    </Span>
  )
}

export default App