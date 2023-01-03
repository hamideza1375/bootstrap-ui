import React from 'react'
import { Text } from 'react-native';
import { Span } from '../Components/Html';
import LinearGradient from '../Components/other/LinearGradient';


export default function _LinearGradient() {
  return (
    <Span w={150} h={150} as='center' mt={50}>

      <LinearGradient nativeStart={{ x: 1.5, y:1.5 }} webStart={{ x: 7 }}  colors={['blue', 'red', 'green']} style={{ borderRadius: 100, width: 150, height: 150 }} >

      </LinearGradient>

      <Span style={{ borderRadius: 100, width: 140, height: 140, right: 5, top: 5, zIndex: 111111, backgroundColor: 'white', position: 'absolute' }} >

      </Span>
    </Span>


  )
}
