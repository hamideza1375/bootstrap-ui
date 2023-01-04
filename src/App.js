import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Init, Span } from './Components/Html'
// import Slider from './ui/Slider'
// import _ScrollSlider from './ui/ScrollSlider'
// import Button from './ui/Button'
// import B_icon from './ui/B_icon'
// import Badge from './ui/Badge'
// import Dropdown from './ui/Dropdown'
// import Input from './ui/Input'
// import LinearGradient from './ui/LinearGradient'
// import List from './ui/List'
// import Loading from './ui/Loading'
// import MaskedView from './ui/MaskedView'
// import Modal from './ui/Modal'
// import Switch from './ui/Switch'
// import Swiper from './ui/Swiper'
// import Table from './ui/Table'
// import Card from './ui/Card'
// import Card2 from './ui/Card2'
// import SearchBar from './ui/SearchBar'
import Form from './ui/Form'
import { states, context } from './utils/context/contexts'
import rtl from './utils/rtl'
rtl()

const App = () => {
  const allState = states()
  return (
    <Span f={1} >

    <NavigationContainer>
      <Init ref={(e) => allState.set$(e)} id={'s'} />
      {/* <Slider {...allState} /> */}
      {/* <_ScrollSlider {...allState} /> */}
      {/* <Button {...allState} /> */}
      {/* <B_icon {...allState} /> */}
      {/* <Badge {...allState} /> */}
      {/* <Dropdown {...allState} /> */}
      {/* <Input {...allState} /> */}
      {/* <LinearGradient {...allState} /> */}
      {/* <List {...allState} /> */}
      {/* <Loading {...allState} /> */}
      {/* <MaskedView {...allState} /> */}
      {/* <Modal {...allState} /> */}
      {/* <Switch {...allState} /> */}
      {/* <Swiper {...allState} /> */}
      {/* <Table {...allState} /> */}
      {/* <Card {...allState} /> */}
      {/* <Card2 {...allState} /> */}
      {/* <SearchBar {...allState} /> */}
      <Form {...allState} />
    </NavigationContainer>
    </Span>
  )
}

export default App