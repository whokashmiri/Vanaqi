import { useState, useRef } from 'react';
import { FaEnvelope,  FaPhoneAlt, FaUser, FaUsers } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { AtSign } from 'lucide-react';

const ContactUs = () => {
  const [selected, setSelected] = useState('solo');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', formRef.current, 'your_public_key')
      .then((result) => {
        console.log('Email sent ✅:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('Email error ❌:', error.text);
        alert('Failed to send message!');
      });
  };

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      {/* Hero Section */}
      <section className="bg-white w-full px-6 py-12 md:py-20">
        <div className="relative w-full rounded-3xl overflow-hidden">
          {/* Corners */}
          <div className="absolute top-0 right-0 w-40 h-20 bg-white rounded-bl-3xl z-10"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-tr-3xl z-10"></div>

          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[280px] md:h-[360px] object-cover rounded-3xl"
          >
            <source src="https://videos.pexels.com/video-files/4231455/4231455-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg">Get In Touch</h1>
            <div className="mt-6 w-16 h-16 rounded-full bg-white bg-opacity-20 border border-white flex items-center justify-center">
              <span className="text-2xl animate-bounce">↓</span>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 font-medium">Where Comfort Meets Contemporary Design</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-green-800 leading-tight">
            Discover the Art of <br />
            Beautiful Living with Arzoo Interiors
          </h2>
        </div>
      </section>

      {/* Contact Form + Image Section */}
      <div className="min-h-screen flex flex-col-reverse md:flex-row bg-gray-100">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
          <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-3">Chat to our team</h2>
            <p className="text-gray-500 mb-8">Need help with something? Want a demo? Reach out and we’ll get back to you within 2 hours.</p>

            <div className="flex gap-4 mb-4">
              <input name="first_name" placeholder="First name" required className="w-1/2 border border-gray-300 rounded px-4 py-2" />
              <input name="last_name" placeholder="Last name" required className="w-1/2 border border-gray-300 rounded px-4 py-2" />
            </div>

            <input name="job_title" placeholder="Job title" className="w-full mb-4 border border-gray-300 rounded px-4 py-2" />
            <input name="email" type="email" placeholder="Work email" required className="w-full mb-4 border border-gray-300 rounded px-4 py-2" />

            <textarea name="message" rows="4" placeholder="Write your message here..." required className="w-full mb-4 border border-gray-300 rounded px-4 py-2 resize-none" />

            <div className="flex mb-4">
              <select name="country_code" className="border border-gray-300 rounded-l px-4 py-2 bg-white text-gray-700">
                <option>US</option>
                <option>IN</option>
                <option>UK</option>
              </select>
              <input name="phone" placeholder="+1 (555) 000-0000" className="w-full border border-l-0 border-gray-300 rounded-r px-4 py-2" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of employees</label>
              <div className="space-y-4">
                <button type="button" onClick={() => setSelected('solo')} className={`flex gap-4 w-full p-4 border rounded-lg ${selected === 'solo' ? 'border-black bg-gray-100' : 'border-gray-300'}`}>
                  <FaUser className="mt-1" />
                  <div>
                    <p className="font-medium">I’m a solo creator</p>
                    <p className="text-sm text-gray-500">Set up an account for myself</p>
                  </div>
                </button>
                <button type="button" onClick={() => setSelected('team')} className={`flex gap-4 w-full p-4 border rounded-lg ${selected === 'team' ? 'border-black bg-gray-100' : 'border-gray-300'}`}>
                  <FaUsers className="mt-1" />
                  <div>
                    <p className="font-medium">I’m part of a team</p>
                    <p className="text-sm text-gray-500">Set up an account for a team</p>
                  </div>
                </button>
              </div>
              <input type="hidden" name="employee_type" value={selected} />
            </div>

            <button type="submit" className="w-full font-bold text-black py-3 border-2 border-black hover:bg-black hover:text-white transition duration-300">
              GET IN TOUCH
            </button>
          </form>
        </div>

        {/* Right: Visual */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
          <img
            src="https://images.pexels.com/photos/3366282/pexels-photo-3366282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white">
            <p className="text-lg font-medium leading-snug mb-2">
              Untitled’s software helps us manage cash flow, financial reporting and payroll with ease.
            </p>
            <p className="text-sm text-gray-300">ARZOO PATEL, Founder & CEO</p>
          </div>
        </div>
      </div>

      {/* Head Office Info Section */}
      <section className="w-full bg-[#f9f5f0] py-12 px-6 md:px-16">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-black mb-12">Welcome to our Work Place</h1>
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">Head Office</h2>
            <p className="text-gray-600 mb-8">
              Our head office is the heart of our operations, where creativity, collaboration, and innovation come.
            </p>
            <div className="space-y-4 text-gray-800">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl" />
                <span>+918767146842</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl" />
                <span>manar.designs1@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <AtSign className="text-xl" />
                <span>manar.designs1</span>
              </div>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/271800/pexels-photo-271800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Head Office Interior"
            className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>
      </section>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default ContactUs;
