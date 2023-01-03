import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


function Lineargradient({ children, colors = [], nativeStart = {}, style }) {
    return (

        <LinearGradient start={{ x: nativeStart?.x ? nativeStart.x : 1.5, y: nativeStart?.y ? nativeStart.y : .5 }} end={{ x: 0, y: 0 }} colors={colors} style={[{ flex: 1 }, style]}>

            {children}
        </LinearGradient>
    )
}

export default Lineargradient