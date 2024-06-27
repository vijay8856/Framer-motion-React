// App.js 

import React from 'react';

import './App.css'; 
import AnimatedBox from './Component.js/AnimatedBox';
import FramerBox from './Component.js/FramerBox';
import FadeTextAnimation from './Component.js/FadeTextAnimation';

function App() { 


	return ( 
	<> 
	<div className='app'>
	{/* <AnimatedBox/>
	<FramerBox/> */}
	<FadeTextAnimation/>
	
	</div>


 		</> 
	); 
} 

export default App;
