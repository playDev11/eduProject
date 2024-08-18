import React from 'react'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import './about.css'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe voluptatem vero, dicta atque tempore nam veniam facilis libero culpa aliquam tenetur eveniet iure ipsa doloribus praesentium nostrum placeat sit et fugiat consequuntur aperiam voluptas accusamus! Error quidem aliquam fuga magnam ut odio, tempore vel!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque fugiat natus aspernatur neque, nobis esse quod rem sed ipsa? Ab accusamus aut labore ipsum at consectetur voluptas cumque quis modi officia voluptates recusandae unde suscipit quos, obcaecati vitae a possimus ipsam assumenda reprehenderit illum! Assumenda quisquam est maiores laboriosam dicta, ex repellat id, ab voluptate nemo dolorem perferendis consequatur nihil rerum excepturi nesciunt laudantium cumque? Totam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus accusantium temporibus ea quam nobis aut dolore, tempora pariatur molestiae vel, ut fugiat, impedit nesciunt facere excepturi. Numquam vel repudiandae rerum possimus harum repellendus perspiciatis sequi molestiae animi? Fugiat nesciunt beatae eius magnam saepe tempore odio laudantium voluptatum quidem quasi, corporis hic, earum rerum accusantium. Odit expedita voluptatem id maxime aliquid, illum magni magnam nesciunt, harum porro saepe animi doloribus ea rerum itaque earum nostrum! Repellendus, similique cupiditate.</p>
        </div>
    </div>
  )
}

export default About