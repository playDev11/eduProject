import React, { useRef } from 'react'
import './testimonial.css'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

        const slider = useRef();
        let tx = 0;
    const sliderForward = ()=> {
        if(tx > -50){
            tx -= 50;
        }
        slider.current.style.transform = `translatex(${tx}%)`;
    }
    const sliderBackward = () => {
        if(tx < 0){
            tx += 50
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className="testimonial">
        <img src={next_icon} alt=""  className='next-btn' onClick= {sliderForward} />
        <img src={back_icon} alt="" className='back-btn' onClick= {sliderBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_1} alt="" />
                        <h3>William Jackson</h3>
                        <span>Washington DC, USA</span>
                        </div>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quisquam qui nemo exercitationem magni eius excepturi incidunt sequi non sit accusantium fugit in voluptates deleniti neque, earum enim saepe necessitatibus obcaecati harum tempore inventore. Cum!
                     </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_2} alt="" />
                        <h3>William Jackson2</h3>
                        <span>Washington DC, USA</span>
                        </div>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quisquam qui nemo exercitationem magni eius excepturi incidunt sequi non sit accusantium fugit in voluptates deleniti neque, earum enim saepe necessitatibus obcaecati harum tempore inventore. Cum!
                     </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_3} alt="" />
                        <h3>William Jackson3</h3>
                        <span>Washington DC, USA</span>
                        </div>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quisquam qui nemo exercitationem magni eius excepturi incidunt sequi non sit accusantium fugit in voluptates deleniti neque, earum enim saepe necessitatibus obcaecati harum tempore inventore. Cum!
                     </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_4} alt="" />
                        <h3>William Jackson4 </h3>
                        <span>Washington DC, USA</span>
                        </div>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quisquam qui nemo exercitationem magni eius excepturi incidunt sequi non sit accusantium fugit in voluptates deleniti neque, earum enim saepe necessitatibus obcaecati harum tempore inventore. Cum!
                     </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial