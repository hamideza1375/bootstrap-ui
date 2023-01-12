import React, { useState } from 'react'
import { Img, ScrollHorizontal, Span, M_icon, Press } from '../Html'

var count = 1,
  width,
  plus,
  minus

function Slider(p) {


  const [interval, setinterval] = useState(true)

  const open = () => {
    { p.$.id(p.id) && p.$.id(p.id).scrollTo({ x: p.width * count, y: 0, animated: true }); }
    if (count === 1) { plus = true; minus = false }
    if (count === 7) { minus = true; plus = false }
    if (minus) { count = count - 1 }
    if (plus) { count += 1 }
  };

  const right = () => {
    if (count !== 0) count = count - 1
    p.$.id(p.id) && p.$.id(p.id).scrollTo({ x: p.width * count, y: 0, animated: true });
  };

  const left = () => {
    if (count !== 7) count += 1
    p.$.id(p.id) && p.$.id(p.id).scrollTo({ x: p.width * count, y: 0, animated: true });
  };


  if (p.width !== width) {
    p.$.id(p.id) && p.$.id(p.id).scrollTo({ x: 0, y: 0, animated: true });
    count = 1
    interval && clearInterval(interval)
  }

  p.useEffect(() => {
    return () => (
      clearInterval(interval)
    )
  }, [])


  return (

    <Span>
      <ScrollHorizontal dir='ltr' id={p.id} onLayout={() => {
        width = p.width
        let int = setInterval(sum, 6000);
        function sum() {
          open()
        }
        setinterval(int)
      }} onClick={() => alert(7)} style={{ height: 260, width: p.width - 4, marginTop: 2, alignSelf: 'center', borderRadius: 5, overflow: 'hidden', flexWrap: 'wrap' }} >
        <Press onClick={p.onClick} w={p.width} ><Img w='100%' h={300} src={p.img1} /></Press>
        <Press onClick={p.onClick} w={p.width} ><Img w='100%' h={300} src={p.img2} /></Press>
        <Press onClick={p.onClick} w={p.width} ><Img w='100%' h={300} src={p.img3} /></Press>
        <Press onClick={p.onClick} w={p.width} ><Img w='100%' h={300} src={p.img4} /></Press>
        <Press onClick={p.onClick} w={p.width} ><Img w='100%' h={300} src={p.img5} /></Press>
        <Press onClick={p.onClick} w={p.width} ><Img w='100%' h={300} src={p.img6} /></Press>
        <Press onClick={p.onClick} w={p.width} ><Img w='100%' h={300} src={p.img7} /></Press>
        <Press onClick={p.onClick} w={p.width} ><Img w='100%' h={300} src={p.img8} /></Press>
      </ScrollHorizontal>
      <M_icon onClick={left} size={30} name="arrow-back-ios" style={{ position: 'absolute', zIndex: 10, left: 10, top: 130, color: '#222' }} />
      <M_icon onClick={right} size={30} name="arrow-forward-ios" style={{ position: 'absolute', zIndex: 10, right: 10, top: 130, color: '#222' }} />
    </Span>
  )
}

export default Slider

