import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button as Btn, Init, Scroll, Span } from './Components/Html'
import Slider from './ui/Slider'
import ScrollSlider from './ui/ScrollSlider'
import Button from './ui/Button'
import B_icon from './ui/B_icon'
import Badge from './ui/Badge'
import Dropdown from './ui/Dropdown'
import Input from './ui/Input'
import LinearGradient from './ui/LinearGradient'
import List from './ui/List'
import Loading from './ui/Loading'
import MaskedView from './ui/MaskedView'
import Modal from './ui/Modal'
import Switch from './ui/Switch'
import Swiper from './ui/Swiper'
import Table from './ui/Table'
import Card from './ui/Card'
import Card2 from './ui/Card2'
import SearchBar from './ui/SearchBar'
import Form from './ui/Form'
import VirtualList from './ui/VirtualList'
import Flatlist from './ui/FlatList'

import { states, context } from './utils/context/contexts'
import rtl from './utils/rtl'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View } from 'react-native'
rtl()



const Home = ({ navigation }) => {
  return (
    <Scroll webStyle={{ height: '100vh', width: '100%' }} natyveStyle={{ height: '100%', width: '100%' }} >
      <Btn onClick={() => { navigation.navigate('Slider') }} >Slider</Btn>
      <Btn onClick={() => { navigation.navigate('ScrollSlider') }} >ScrollSlider</Btn>
      <Btn onClick={() => { navigation.navigate('Button') }} >Button</Btn>
      <Btn onClick={() => { navigation.navigate('B_icon') }} >B_icon</Btn>
      <Btn onClick={() => { navigation.navigate('Badge') }} >Badge</Btn>
      <Btn onClick={() => { navigation.navigate('Dropdown') }} >Dropdown</Btn>
      <Btn onClick={() => { navigation.navigate('Input') }} >Input</Btn>
      <Btn onClick={() => { navigation.navigate('LinearGradient') }} >LinearGradient</Btn>
      <Btn onClick={() => { navigation.navigate('List') }} >List</Btn>
      <Btn onClick={() => { navigation.navigate('Loading') }} >Loading</Btn>
      <Btn onClick={() => { navigation.navigate('MaskedView') }} >MaskedView</Btn>
      <Btn onClick={() => { navigation.navigate('Modal') }} >Modal</Btn>
      <Btn onClick={() => { navigation.navigate('Switch') }} >Switch</Btn>
      <Btn onClick={() => { navigation.navigate('Swiper') }} >Swiper</Btn>
      <Btn onClick={() => { navigation.navigate('Table') }} >Table</Btn>
      <Btn onClick={() => { navigation.navigate('Card') }} >Card</Btn>
      <Btn onClick={() => { navigation.navigate('Card2') }} >Card2</Btn>
      <Btn onClick={() => { navigation.navigate('SearchBar') }} >SearchBar</Btn>
      <Btn onClick={() => { navigation.navigate('Form') }} >Form</Btn>
      <Btn onClick={() => { navigation.navigate('VirtualList') }} >VirtualList</Btn>
      <Btn onClick={() => { navigation.navigate('Flatlist') }} >Flatlist</Btn>
    </Scroll>
  )
}


const Tab = createNativeStackNavigator()






const App = () => {

  const allState = states()


  return (
    <Span webStyle={{ height: '100vh', width: '100%' }} nativeStyle={{ flex: 1, width: '100%' }} >
      <Init ref={(e) => allState.set$(e)} id={'s'} />
      <NavigationContainer>
        <Tab.Navigator  >
          <Tab.Screen name="Home" children={(props) => <Home {...props} {...allState} />} />
          <Tab.Screen name="Slider" children={(props) => <Slider {...props} {...allState} />} />
          <Tab.Screen name="ScrollSlider" children={(props) => <ScrollSlider {...props} {...allState} />} />
          <Tab.Screen name="Form" children={(props) => <Form {...props} {...allState} />} />
          <Tab.Screen name="Button" children={(props) => <Button {...props} {...allState} />} />
          <Tab.Screen name="B_icon" children={(props) => <B_icon {...props} {...allState} />} />
          <Tab.Screen name="Badge" children={(props) => <Badge {...props} {...allState} />} />
          <Tab.Screen name="Dropdown" children={(props) => <Dropdown {...props} {...allState} />} />
          <Tab.Screen name="Input" children={(props) => <Input {...props} {...allState} />} />
          <Tab.Screen name="LinearGradient" children={(props) => <LinearGradient {...props} {...allState} />} />
          <Tab.Screen name="List" children={(props) => <List {...props} {...allState} />} />
          <Tab.Screen name="Loading" children={(props) => <Loading {...props} {...allState} />} />
          <Tab.Screen name="MaskedView" children={(props) => <MaskedView {...props} {...allState} />} />
          <Tab.Screen name="Modal" children={(props) => <Modal {...props} {...allState} />} />
          <Tab.Screen name="Switch" children={(props) => <Switch {...props} {...allState} />} />
          <Tab.Screen name="Swiper" children={(props) => <Swiper {...props} {...allState} />} />
          <Tab.Screen name="Table" children={(props) => <Table {...props} {...allState} />} />
          <Tab.Screen name="Card" children={(props) => <Card {...props} {...allState} />} />
          <Tab.Screen name="Card2" children={(props) => <Card2 {...props} {...allState} />} />
          <Tab.Screen name="VirtualList" children={(props) => <VirtualList {...props} {...allState} />} />
          <Tab.Screen name="Flatlist" children={(props) => <Flatlist {...props} {...allState} />} />
          
        </Tab.Navigator  >
      </NavigationContainer>
    </Span>
  )
}
export default App