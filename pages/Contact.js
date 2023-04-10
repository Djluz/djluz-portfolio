import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r3eknip', 'template_9dlge7l', form.current, 'Dod6Pn8mDZcR7ptuG')
      
    e.target.reset()
  };

  return (
    <section id='contact' className='pb-[100px]'>
      <h3 className='py-5 mb-10 text-3xl dark:text-white'>
        Contact Me
      </h3>
      <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
        <div className="flex-1 gap-3 text-white basis-1/3">
          <article className="flex-1 gap-3 mb-5 bg-gray-700 md:flex md:gap-28 lg:gap-4 xl:gap-28 2xl:gap-52 contact__option hover:text-black hover:bg-slate-100 dark:bg-gray-600">          
            <div className='justify-items-center' id='transition'>
              <h4>Email</h4>
              <h5>daryljaneluz@gmail.com</h5>
            </div>
            <div className='flex gap-2' id='button'>
              <MdOutlineEmail className='mt-1 text-cyan-400' />
              <a href="mailto:daryljaneluz@gmail.com" className= 'hover:text-black' >Send email</a>
            </div>
          </article>

          <article className="flex-1 gap-3 mb-5 bg-gray-700 md:flex md:gap-28 lg:gap-4 xl:gap-28 2xl:gap-52 contact__option hover:text-black hover:bg-slate-100 dark:bg-gray-600">
            <div className='justify-items-center' id='transition'>
              <h4>Messenger</h4>
              <h5>Daryl Jane Galvez-Luz</h5>
            </div>
            <div className='flex gap-2' id='button'>
              <RiMessengerLine className='mt-1 text-cyan-400' />
              <a href="https://m.me/daryl.j.galvez" target="_blank" className= 'hover:text-black'>Send message</a>
            </div>
          </article>

          <article className="flex-1 gap-3 mb-5 bg-gray-700 md:flex md:gap-28 lg:gap-4 xl:gap-28 2xl:gap-52 contact__option hover:text-black hover:bg-slate-100 dark:bg-gray-600">
            <div className='justify-items-center' id='transition'>
              <h4>WhatsApp</h4>
              <h5>+639 19 222 8412</h5>
            </div>
            <div className='flex gap-2' id='button'>
              <BsWhatsapp className='mt-1 text-cyan-400' />
              <a href="https://api.whatapp.com/send?phone+639192228412" target="_blank" className= 'hover:text-black'>Send message</a>
            </div>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className='flex-1 w-full basis-1/3'>
          <div className='relative mb-1'>
            <input type="text" name='name' placeholder='Your Full Name' className='placeholder-transparent peer focus:outline-none focus:border-cyan-300 focus:ring-cyan-300 focus:ring-1' required />
            <label for='name' className='absolute px-2 py-1 transition-all ease-in-out bg-white duration-400 text-cyan-400 dark:bg-gray-900 left-4 -top-4 text-md peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-4 peer-focus:text-cyan-500' >Your Full Name</label>
          </div>
          <div className='relative mb-1'>
          <input type="email" name='email' placeholder='Your Email' className='placeholder-transparent peer focus:outline-none focus:border-cyan-300 focus:ring-cyan-300 focus:ring-1' required />
          <label for='name' className='absolute px-2 py-1 transition-all ease-in-out bg-white duration-400 text-cyan-400 dark:bg-gray-900 left-4 -top-4 text-md peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-4 peer-focus:text-cyan-500' >Your Email</label>
          </div>
          <div className='relative mb-1'>
          <textarea name="message" rows="7" placeholder='Your Message' className='placeholder-transparent peer focus:outline-none focus:border-cyan-300 focus:ring-cyan-300 focus:ring-1' required />
          <label for='name' className='absolute px-2 py-1 transition-all ease-in-out bg-white duration-400 text-cyan-400 dark:bg-gray-900 left-4 -top-4 text-md peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-4 peer-focus:text-cyan-500' >Your Message</label>
          </div>
          <div className='justify-center'>
            <button type='submit' className='px-5 py-2 text-white align-middle rounded-lg shadow-lg btn w-fit bg-gradient-to-r from-cyan-500 to-teal-500 hover:shadow-gray-500 hover:text-black'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact