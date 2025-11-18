import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profile from '../../assets/profile.jpg'
const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className=' flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* {Greeting} */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white  mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white  mb-4 leading-tight'>Deepak Dagdi</h2>
          {/* skils and heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a {"  "}
            </span>
            <Typewriter
              words={[
                'Java Full Stack Developer',
                'MERN Stack Developer',
                '.Net Developer',
                'Python Developer',
                'Php Developer',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
          {/* {About me paragraph} */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>I 
            am a dedicated and versatile Software Engineer with strong expertise in Java, 
            Spring Boot, and full-stack development. I have hands-on experience building secure,
             scalable applications, including REST APIs, MERN-based platforms, and Spring 
             Security–enabled systems. My projects such as the Doctor Appointment Booking System
              and URL Shortener demonstrate my ability to design efficient back-end architectures
               and responsive front-end interfaces. I work confidently across databases like MySQL
                and PostgreSQL
                </p>
                <a href="https://drive.google.com/file/d/1sINAislsWUqI99emL4tf9pqLBdF1hTcp/view?usp=sharing"
                 target='_blank'
                 rel='noopener noreferrer'
                 className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
                 style={{
                  background:'linear-gradient(90deg, #8245ec, #a855f7)',
                  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
             }}> DOWNLOAD CV</a>
        </div>
        {/* Right side */}
     <div className="md:w-1/2 flex justify-center md:justify-end">
  <Tilt
    
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
  >
    <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-700 shadow-[0_10px_20px_rgba(130,69,236,0.5)]">
      <img
        src={profile}
        alt="deepakdagdi"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </Tilt>
</div>

        {/* w-48 sm:w-56 md:w-64 lg:w-72 */}
      </div>

    </section>
  )
}

export default About