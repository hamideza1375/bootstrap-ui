import React from 'react';
import {Button} from './components/Html';
import download from './states/download'

function App() {

  return (
    <>
      <Button onClick={() => {
        download('https://s32.namasha.com/videos/dl/7374690107-144p/تحلیل-تکنیکال-سولانا-آپدیت-9-شهریور-1401-144p.mp4')
      }} >bynufd</Button>
    </>
  )
}



export default App;
