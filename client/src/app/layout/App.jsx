import React, { Fragment } from 'react';
import './App.css';
import Monster from '../../features/Monster';
import Live from '../../features/Live';
import Habitat from '../../features/Habitat';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NavBar from './Navbar';
import { Container } from '@mui/material';
import NotFound from './NotFound';
import HomePage from '../../features/Home';

const App = () => {
  return (
    // <div className="App" style={{padding: '1.5em'}}>
    //   <h1>React and NodeJs Sample</h1>
    //   <Monster/>
    //   <br/>
    //   <Live/>
    //   <br/>
    //   <Habitat/>
    // </div>
    <Fragment>
      {/* <ModalContainer /> */}
      <ToastContainer position="bottom-right" />
      {/* <Route exact path="/" component={HomePage}></Route> */}
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/monsters" element={<Monster />} />
          <Route path="/habitats" element={<Habitat />} />
          <Route path="/lives" element={<Live />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
