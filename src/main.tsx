import { render } from 'preact'
import './style.css'
import { App } from './App.tsx'

const root = document.getElementById('app')
if (!root) throw new Error('App root element not found')

render(<App />, root)