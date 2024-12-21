import { useState, useEffect } from "react";
import { FaBasketballBall, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 22,
    minutes: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date("2024-12-31T00:00:00");
      const diff = target - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-10 relative p-[10px] md:p-[20px] mx-[20px] hero-section">
      <h1 className="text-[22px] md:text-[96px] text-white text-center">Launching Soon</h1>

      {/* <div className="flex justify-center gap-4 items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center bg-gradient-to-bl from-[#ffffff6c] to-[#dadada0a] rounded-sm shadow-lg px-6 py-8">
            <span className="text-5xl font-bold text-white tracking-wide">
              {timeLeft.days}
            </span>
          </div>
          <span className="mt-2 text-sm uppercase text-white/80">DAYS</span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center bg-gradient-to-bl from-[#ffffff6c] to-[#dadada0a] rounded-sm shadow-lg px-6 py-8">
            <span className="text-5xl font-bold text-white tracking-wide">
              {timeLeft.hours}
            </span>
          </div>
          <span className="mt-2 text-sm uppercase text-white/80">HOURS</span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center bg-gradient-to-bl from-[#ffffff6c] to-[#dadada0a] rounded-sm shadow-lg px-6 py-8">
            <span className="text-5xl font-bold text-white tracking-wide">
              {timeLeft.minutes}
            </span>
          </div>
          <span className="mt-2 text-sm uppercase text-white/80">MINUTES</span>
        </div>
      </div> */}

       {/* Timer Section */}
  <div className="flex justify-center gap-3 md:gap-4 items-center">
    {/* Days */}
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-1">
        {timeLeft.days
          .toString()
          .split("")
          .map((digit, index) => (
            <div
              key={`days-${index}`}
              className="flex items-center justify-center bg-gradient-to-bl from-[#ffffff6c] to-[#dadada0a] rounded-sm shadow-lg px-3 md:px-6 py-8"
            >
              <span className="text-5xl font-bold text-white tracking-wide">
                {digit}
              </span>
            </div>
          ))}
      </div>
      <span className="mt-2 text-sm uppercase text-white/80">DAYS</span>
    </div>

    {/* Hours */}
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-1">
        {timeLeft.hours
          .toString()
          .split("")
          .map((digit, index) => (
            <div
              key={`hours-${index}`}
              className="flex items-center justify-center bg-gradient-to-bl from-[#ffffff6c] to-[#dadada0a] rounded-sm shadow-lg px-3 md:px-6 py-8"
            >
              <span className="text-5xl font-bold text-white tracking-wide">
                {digit}
              </span>
            </div>
          ))}
      </div>
      <span className="mt-2 text-sm uppercase text-white/80">HOURS</span>
    </div>

    {/* Minutes */}
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-1">
        {timeLeft.minutes
          .toString()
          .split("")
          .map((digit, index) => (
            <div
              key={`minutes-${index}`}
              className="flex items-center justify-center bg-gradient-to-bl from-[#ffffff6c] to-[#dadada0a] rounded-sm shadow-lg px-3 md:px-6 py-8"
            >
              <span className="text-5xl font-bold text-white tracking-wide">
                {digit}
              </span>
            </div>
          ))}
      </div>
      <span className="mt-2 text-sm uppercase text-white/80">MINUTES</span>
    </div>
  </div>

      <p className="text-white text-center text-[15px] md:text-[32px]">
        We’ll let you know when we are Launching7
      </p>


      <div className="flex items-center text-center w-full">
      <div className="text-center w-full">
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-l-md rounded-tr-none rounded-br-none max-w-[220px] px-[1px] md:px-4 py-[4px] md:py-[9px] focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-teal-400 text-white px-[1px] md:px-4 py-[5px] md:py-[10.5px] rounded-r-md hover:bg-teal-500 transition">
          Notify Me
        </button>

      </div>
      </div>

    {/* social linkis */}
        <div className="flex md:flex-col gap-5 mx-auto static md:absolute right-20 bottom-[20px] ">
        <a href="https://github.com/ABDELRAHMAN097" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">  <FaFacebookF /> </a>
        <a href="https://github.com/ABDELRAHMAN097" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">  <FaTwitter />   </a>
        <a href="https://github.com/ABDELRAHMAN097" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">  <FaLinkedinIn /></a>
        <a href="https://github.com/ABDELRAHMAN097" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">  <FaInstagram /> </a>
        <a href="https://github.com/ABDELRAHMAN097" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">  <FaBasketballBall /></a>
        </div>
      <span className="w-[250px] md:w-[480px] h-[250px] md:h-[480px] bg-gradient-to-tl from-[#4D35A3] via-[#DF40A9] to-[#DF40A9] rounded-full absolute top-[-130px] left-[-120px] z-[-20]"></span>
      <span className="w-[250px] md:w-[480px] h-[250px] md:h-[480px] bg-gradient-to-bl from-[#DF40A9] via-[#4D35A3] to-[#4D35A3] rounded-full absolute bottom-[-70px] md:bottom-[-130px] right-[-90px] z-[-15]"></span>
    </div>
  ); 
};

export default Hero;
