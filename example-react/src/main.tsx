import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponents from './example/classComponents'
import ComposingComponents from './example/composingComponents'
import ExtractingComponents from './example/extractingComponents'
import RenderingComponent from './example/renderingComponent'
import HandlingEvent from './example/handlingEvent'
import StateLifecycle from './example/stateLifecycle'
import ConditionalRendering from './example/conditionalRendering'
ReactDOM.render(
  <React.StrictMode>
    <ClassComponents />
    <RenderingComponent name='Thang Ho' />
    <ComposingComponents />
    <ExtractingComponents />
    <StateLifecycle />
    <HandlingEvent />
    <ConditionalRendering />
  </React.StrictMode>,
  document.getElementById('root')
)
