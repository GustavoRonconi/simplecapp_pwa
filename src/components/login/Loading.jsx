import React from 'react';




import Lottie from 'react-lottie';
import { SafeAreaView } from 'react-native';


import animationData from '../animationLoading.json'



export default function Loading() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
   
  <SafeAreaView>
      <Lottie
       style={{ display: 'flex', margin: '5% 10% 10% 0', justifyContent: 'left', alignItens: 'left',}}
        height={70}
        width={70}
        resizeMode='contain'
        options={defaultOptions} />
   </SafeAreaView>
  )
}





