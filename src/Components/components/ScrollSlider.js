import React, { useState } from 'react'
import { ScrollHorizontal } from '../Html'

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
      { p.$ && p.$.id(p.id).scrollTo({ x: count, y: 0, animated: true }); }
      count += 150
  };

  if(scrollWidth && (scroll + scrollWidth + 200) >= contentSize){clearInterval(interval)} 
  if(!scroll2){clearInterval(interval)} 

  if (p.width !== width) {
    p.$ && p.$.id(p.id).scrollTo({ x: 0, y: 0, animated: true });
    count = 1
    interval && clearInterval(interval)
  }

  p.useEffect(() => {
    return()=>(
      clearInterval(interval)
      )
  }, [])

  return (
    <>
      <ScrollHorizontal
      contentContainerStyle={p.ccStyle}
        onLayout={(e) => { setscrollWidth(e.nativeEvent.layout.width);width = p.width; let int = setInterval(sum, 4000); function sum() { if(scroll2)open(); setinterval(int) } }}
        onContentSizeChange={(e)=>{setcontentSize(e);}}
        scrollEventThrottle={0}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        contentInset={{ top: 0 }}
        onScroll={(e) => { setscroll(e.nativeEvent.contentOffset.x) }}
        onMoveShouldSetResponder={(e) => {
          setscroll2(false)
          if (das.length > 2) das = []
          das.push(e.nativeEvent.pageX)
          if (das[0] > das[1]) p.$.id(p.id).scrollTo({ x: scroll + 100, y: 0 })
          if (das[0] < das[1]) p.$.id(p.id).scrollTo({ x: scroll - 100, y: 0 })
          setscroll2(false)

        }} dir='ltr' id={p.id}

        style={[{ overflow: 'auto', height: p.h?p.h:150, width: p.width - 4, marginTop: 2, alignSelf: 'center', borderRadius: 5, },p.style]} >
        {p.children}
      </ScrollHorizontal>
    </>
  )
}

export default ScrollSlider

