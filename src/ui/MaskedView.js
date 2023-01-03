import React from 'react'
import { Text } from 'react-native'
import MaskedView from '../Components/other/MaskedView'


const App = () => {
  return (
    <>
      <MaskedView  source={require("../assets/images/g1.jpg")} >
        <Text style={{fontSize:60,fontWeight:'bold'}}>dsrf</Text>
      </MaskedView>

      <MaskedView colors={['red','blue', 'green']} >
        <Text style={{fontSize:70}}>dsrf</Text>
      </MaskedView>
    </>
  )
}






export default App
