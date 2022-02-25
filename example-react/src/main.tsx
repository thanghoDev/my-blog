import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponents from './example/classComponents'
import ComposingComponents from './example/composingComponents'
import ExtractingComponents from './example/extractingComponents'
import RenderingComponent from './example/renderingComponent'
import HandlingEvent from './example/handlingEvent'
import StateLifecycle from './example/stateLifecycle'
import ConditionalRendering from './example/conditionalRendering'
import { EssayForm, FileInput, FlavorForm, NameForm } from './example/forms'
import LiftingStateUp from './example/liftingStateUp'
import {App , WelcomeDialog } from './example/composition'
ReactDOM.render(
  <React.StrictMode>
    <ClassComponents />
    <RenderingComponent name='Thang Ho' />
    <ComposingComponents />
    <ExtractingComponents />
    <StateLifecycle />
    <HandlingEvent />
    <ConditionalRendering /> 
    <EssayForm />
    <FileInput />
    <FlavorForm />
    <NameForm />  
    <WelcomeDialog />
    <LiftingStateUp />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
