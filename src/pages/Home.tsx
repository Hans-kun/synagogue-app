import React from "react";
import img1 from "../assets/Event Image.png";
import { GoClock } from "react-icons/go";
import { LuCalendarCheck } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

const Home = () => {
  return (
    <div className=''>
      <section id='hero'>
        <div className='bg-bg-img bg-cover bg-no-repeat bg-center min-h-screen w- full'>
          <div className='flex flex-col h-screen items-center justify-center gap-[10px]'>
            <p className='w-[300px] md:w-[500px] lg:w-[1052px] font-semibold text-[32px]/[38.73px] xl:text-[80px]/[96.82px] text-white text-center'>
              PROMOTING JEWISH LIFE AND ETHICS IN NIGERIA
            </p>
            <button className='w-[238px] h-[50px] bg-[#255D99] text-white py-[15px] text-center hover:cursor-pointer font-semibold text-[16px] hover:shadow-md self-center'>
              Become a member
            </button>
          </div>
        </div>
      </section>
      <section id='Weekly Parsha'>
        <div className='flex flex-col min-h-screen w- full items-center gap-5 justify-center'>
          <h3 className='font-semibold text-2xl/[29.05px] lg:text-[40px]/[48.41px]'>
            Weekly Parsha
          </h3>
          <div className='flex flex-col gap-[10px] w-[300px] lg:w-[700px] xl:w-[1000px] text-center text-[16px]/[19.36px] lg:text-xl/[24.2px]'>
            <p className='flex text-center font-light italic '>
              <span className='text-[32px]/[38.73px] lg:text-[50px]/[10.51px] '>
                “
              </span>{" "}
              Lorem ipsum dolor sit amet consectetur. Amet molestie molestie
              fermentum amet in gravida eu augue hendrerit. Gravida et pharetra
              accumsan ac posuere. Lorem ipsum dolor sit amet consectetur. Amet
              molestie molestie fermentum amet in gravida eu augue hendrerit.
              Gravida et pharetra accumsan ac posuere. Lorem ipsum dolor sit
              amet consectetur. Amet molestie molestie fermentum amet in gravida
              eu augue hendrerit. Gravida et pharetra accumsan ac posuere.
              <span className='rotate-180 text-[32px]/[38.73px] lg:text-[50px]/[10.51px] text-end'>
                “
              </span>
            </p>
            <div className='flex pt-[10px] justify-center gap-[10px] font-normal'>
              <p>Genesis 40:12</p>
              <span>-</span>
              <p>Genesis 44:07</p>
            </div>
          </div>
          <button className='w-[138px] h-[40px] border border-[#3D9BFF] text-center text-[#3D9BFF] hover:cursor-pointer hover:bg-[#3D9BFF] hover:text-white'>
            Go to Parsha
          </button>
        </div>
      </section>
      <section id='Upcoming Events'>
        <div className='h-screen w-full flex flex-col lg:flex-row justify -between'>
          <p>Upcoming Events</p>
          <a href='' className='text-center justify-self-end order-last'>
            See more
          </a>
          <div className='flex flex-col lg:flex-row items-center'>
            <div className='flex flex-col w-[300px] gap-5'>
              <img src={img1} alt='' />
              <h1>Heading</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur. Amet molestie molestie
                fermentum amet in gravida eu augue hendrerit. Gravida et
                pharetra accumsan ac posuere.
              </h3>
              <div className='flex'>
                <GoClock color='#004893' /> <p>04:00 PM</p>
              </div>
              <div className='flex'>
                <LuCalendarCheck color='#004893' />{" "}
                <p>Friday, Nov. 11th, 2023</p>
              </div>
              <div className='flex'>
                <CiLocationOn color='#004893' /> <p>04:00 PM</p>
              </div>
              <button className='w-[137px] h-[50px] border border-[#3D9BFF] text-center text-[#3D9BFF] hover:cursor-pointer hover:bg-[#3D9BFF] hover:text-white'>
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
