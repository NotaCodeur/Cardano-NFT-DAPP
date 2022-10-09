import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
import HeaderSection from '../components/Header';
import logo from '../logo.svg';
import Hero from '../components/Hero';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';
import Art from '../components/Art';
import Team from '../components/Team';
import { BackTop } from 'antd';

const Homepage = ({state, dispatch, stateTwo, dispatchTwo}) => {

  


  return (
    <div >
      <BackTop />
      <HeaderSection state={state} dispatch={dispatch} stateTwo={stateTwo} dispatchTwo={dispatchTwo} />

      <Hero state={state} dispatch={dispatch} />
      <Roadmap state={state} dispatch={dispatch} />
      <Art state={state} dispatch={dispatch}  />
      <Team state={state} dispatch={dispatch}  />
      <Faq state={state} dispatch={dispatch}  />


    </div>
  )
}

export default Homepage