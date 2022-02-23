import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponents from './example/classComponents'
import ComposingComponents from './example/composingComponents'
import ExtractingComponents from './example/extractingComponents'
import RenderingComponent from './example/renderingComponent'
ReactDOM.render(
  <React.StrictMode>
    <ClassComponents />
    <RenderingComponent name="Thang Ho" />
    <ComposingComponents />
    <ExtractingComponents />
  </React.StrictMode>,
  document.getElementById("root")
)
