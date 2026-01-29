import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Badge from './components/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import headshot from './assets/headshot.jpg'

function App() {
  const [count, setCount] = useState(0)

  const shapes = ["square", "pill"]
  const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
  const alertTypes = ["success", "warning", "error", "neutral"]
  const multilineTypes = [true, false]

  return (
    <>
      {shapes.map(shape => colors.map(color => <Badge color={color} shape={shape}>Warning!</Badge>))}
      <Banner 
        type="error"
        titleText="Problem"
        isMultiline={true}
      />
      {multilineTypes.map(multilineType => alertTypes.map(alertType => <Banner type={alertType} isMultiline={multilineType} />))}
      {<Card />}
      <div className="testimonial">
        <img className="headshot" src={headshot} />
        <div className="testimonialContent">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04C1.5 36.672 6.108 41.136 11.436 41.136C16.476 41.136 20.22 37.104 20.22 32.352C20.22 27.6 16.908 24.144 12.588 24.144C11.724 24.144 10.572 24.288 10.284 24.432C11.004 19.536 15.612 13.776 20.22 10.896L14.028 6ZM38.796 6C31.596 11.184 26.412 19.68 26.412 29.04C26.412 36.672 31.02 41.136 36.348 41.136C41.244 41.136 45.132 37.104 45.132 32.352C45.132 27.6 41.676 24.144 37.356 24.144C36.492 24.144 35.484 24.288 35.196 24.432C35.916 19.536 40.38 13.776 44.988 10.896L38.796 6Z" fill="white" fill-opacity="0.25"/>
          </svg>
            <div className="testimonialText">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
              <p>May Andersons</p>
              <p>Workcation, CTO</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
