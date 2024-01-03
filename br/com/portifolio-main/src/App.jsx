import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Main />
      <Footer />
    </>
  );
}

export default App;
