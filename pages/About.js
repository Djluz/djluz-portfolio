import React from 'react'
import about from '../public/aboutme2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Image from 'next/legacy/image'
import {BsPatchCheckFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h3 className='py-5 text-3xl dark:text-white'>
        About Me
      </h3>

      <div className="container mt-10 about__container">
        <div className="about__me">
          <div className="about__me-image">
            <Image src={about} alt="About Image" />
          </div>
        </div>

        <div className="t-1 about__content">
          <div className="my-1 md-flex about__cards">
            <article className='text-white bg-gray-600 about__card hover:text-black hover:bg-slate-100 dark:bg-gray-500'>
              <FaAward className='mx-auto about__icon text-cyan-400' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='text-white bg-gray-600 about__card hover:text-black hover:bg-slate-100 dark:bg-gray-500'>
              <FiUsers className='mx-auto about__icon text-cyan-400' />
              <h5>Clients</h5>
              <small>3+ Nationwide</small>
            </article>

            <article className='text-white bg-gray-600 about__card hover:text-black hover:bg-slate-100 dark:bg-gray-500'>
              <VscFolderLibrary className='mx-auto about__icon text-cyan-400' />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <div className='justify-center gap-5 md:flex' >
            <div className='px-10 py-5 my-5 shadow-md rounded-2xl hover:shadow-lg hover:shadow-gray-400 dark:text-white dark:shadow-teal-400'>
              <h3 className='pb-4 text-lg'>Frontend Development</h3>
              <div className='gap-10 columns-2'>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>HTML</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>CSS</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>Tailwind</h4>
                    <small className="text-gray-500">Experienced</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>Bootstrap</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>Javascript</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>React JS</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
              </div>
            </div>

            <div className='px-10 py-5 my-5 shadow-md rounded-2xl hover:shadow-lg hover:shadow-gray-400 dark:text-white dark:shadow-teal-400'>
              <h3 className='pb-4 text-lg'>Backend Development</h3>
              <div className='gap-10 columns-2'>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>Node JS</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>PHP</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>Laravel</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>Livewire</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>My SQL</h4>
                    <small className="text-gray-500">Intermediate</small>
                  </div>
                </div>
                <div className='flex justify-center py-1' >
                  <BsPatchCheckFill className='mt-1 text-lg text-teal-500' />
                  <div className='ml-5 text-left'>
                    <h4>Python</h4>
                    <small className="text-gray-500">Experienced</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className='max-w-2xl py-5 mx-auto leading-8 text-gray-800 text-md dark:text-gray-200' id='about__p'>
            An Engineer by profession with 1+  year of experience as a  web developer specializing in front-end & UI/UX design for website development. Worked on a variety of projects, including front and back end development.
          </p>

          <a href="#contact" className='px-5 py-2 mt-5 text-center text-white align-middle rounded-lg shadow-lg bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-white hover:shadow-gray-500' id='letstalk'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About