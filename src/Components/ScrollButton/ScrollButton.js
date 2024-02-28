import React from 'react'
import "./Scroll.css"
const ScrollButton = () => {
  return (
    <div>
      <span class="hero__scroll aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
				Scroll down <br/>
				<i class="chevron bottom"></i>
			</span>
    </div>
  )
}

export default ScrollButton
