import React from 'react';
import GlobalStyle from './components/Styles/GlobalStyle';
import { Layouts, SignUpFloatingButtons } from './components/Styles/Common';
import Header from './components/Header';
import Hero from './components/Hero';
import Special from './components/Special';
import Partner from './components/Partner';

function App () {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Layouts>
				<Hero />
				<Special />
				<Partner />
				<SignUpFloatingButtons link="https://www.coffeechat.kr/signUp" target="_self" text="가입하고 커피챗 무료체험 하기" />
			</Layouts>
		</>
	);
}

export default App;