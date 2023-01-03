import React, { useState } from 'react'
import { Platform, View } from 'react-native'
import { ScrollHorizontal, Span } from '../Html'

var count = 150,
  width,
  das = []

function ScrollSlider(p) {

  const [scroll, setscroll] = useState(0)
  const [scrollWidth, setscrollWidth] = useState(0)
  const [contentSize, setcontentSize] = useState(0)
  const [scroll2, setscroll2] = useState(true)
  const [interval, setinterval] = useState(true)

  const open = () => {
    if (scroll2) {
      { p.$ && p.$.id(p.id).scrollTo({ x: count, y: 0, animated: true }); }
      count += 150
    }
  };

  if (scrollWidth && (scroll + scrollWidth + 200) >= contentSize) { clearInterval(interval) }
  if (!scroll2) { clearInterval(interval) }

  if (p.width !== width) {
    p.$ && p.$.id(p.id).scrollTo({ x: 0, y: 0, animated: true });
    count = 1
    interval && clearInterval(interval)
  }

  p.useEffect(() => {
    return () => (
      clearInterval(interval)
    )
  }, [])

  !scroll2 && clearInterval(interval)


  return (

    <View onMouseUp={() => { setTimeout(() => { das = [] }, 10) }} >
      <View
        onMoveShouldSetResponderCapture={(e) => {
          setscroll2(false)

          if (Platform.OS === 'web') {
            console.log(scroll + das[0] - das[das.length - 1]);
            das.push(e.nativeEvent.pageX)
            p.$.id(p.id).scrollTo({ x: scroll + das[0] - das[das.length - 1], y: 0 })
            setscroll(scroll + das[0] - das[das.length - 1])
          }
          setscroll2(false)

        }}
      >
        <ScrollHorizontal
          contentContainerStyle={p.ccStyle}
          onLayout={(e) => { setscrollWidth(e.nativeEvent.layout.width); width = p.width; let int = setInterval(sum, 4000); function sum() { if (scroll2) open() } setinterval(int) }}
          onContentSizeChange={(e) => { setcontentSize(e); }}
          scrollEventThrottle={0}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          contentInset={{ top: 0 }}
          onScroll={(e) => { setscroll(e.nativeEvent.contentOffset.x) }}
          dir='ltr' id={p.id}

          style={[{ height: p.h ? p.h : 150, width: p.width - 4, marginTop: 2, alignSelf: 'center', borderRadius: 5, flexWrap:'wrap' }, p.style]} >
          {p.children}
        </ScrollHorizontal>
      </View>
    </View>
  )
}

export default ScrollSlider

