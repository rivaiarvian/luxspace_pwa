import React from 'react';
import Browse from './components/Browse';
import Header from './components/Header';
import Hero from './components/Hero';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import AssideMenu from './components/AssideMenu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <AssideMenu />
      <Footer />
    </>
  );
}

export default App;
