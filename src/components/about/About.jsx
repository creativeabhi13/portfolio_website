import React from 'react'
import "./about.css"
import me1 from "../../assets/me.png"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
  return (
    <section id="about" class="section">

      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <br />
      <br />
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={me1} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Client</h5>
              <small>20+ WorldWIde</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>25+ Completed </small>
            </article>
          </div>
          <p>
            A highly motivated software engineer seeking to get a position in a reputed company, where I can use my
            skills and knowledge to learn new things and grow as a software developer.
            Passionate about learning technical aspects and possess the ability to handle work pressure
            and challenges in an efficient manner.Tech-savvy and a fast learner with innate communication skills and
            curiosity for my role.
          </p>

          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About;