import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

function Page() {
  return (
    <>
      <section className="bg-[url(https://finbiz-react.netlify.app/assets/images/banner/banner-01.jpg)] bg-cover h-[600px] relative">
        <h2 className="absolute right-0 py-64 pr-48 font-bold">
          <span className="text-red-600">Welcome! </span>START GROWING, YOUR
          BUSINESS TODAY
        </h2>
        <h2 className="absolute right-0 py-72 pr-80 font-bold text-2xl">
          Make<span className="text-red-600">Business Unique</span>{" "}
          <span className="block">With Great Ideas</span>
        </h2>
        <p className="absolute right-0 py-[375px] pr-36 block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro{" "}
          <span className="block">
            consequatur voluptatum a nam incidunt sapiente vel nihil.
          </span>{" "}
        </p>
        <button className=" bg-red-500 absolute right-[500px] bottom-20 p-4 rounded-full hover:bg-indigo-500 text-white">
          Get Const
        </button>
      </section>

      <section className="bg-gray-300 mt-3 ">
        <div className="container mx-auto flex gap-12  ">
          <div className="px-6">
            <h3 className="text-red-600">MORE ABOUT US </h3>
            <h4 className="text-[50px] font-bold py-2">
              We Provide Best Business{" "}
              <span className="block">Solution in Town</span>
            </h4>
            <p>
              Porttitor ornare fermentum aliquam pharetra ut facilisis gravida
              risus suscipit.{" "}
              <span className="block">
                dui feugiat fusce conubia ridiculus tristique parturient natoque
                vulputate risu
              </span>{" "}
              business solution ceter 24/7 great support
            </p>
            <div className="py-3 flex gap-6">
              <ul className="list-disc ">
                <li className="marker:text-red-600">
                  24/7 Call Services Avilable
                </li>
                <li className="marker:text-red-600">
                  Great Skilled Consultant
                </li>
                <li className="marker:text-red-600">Expert Team Members</li>
                <li className="py-16 list-none flex gap-3">
                  <img
                    src="https://finbiz-react.netlify.app/assets/images/about/sm-01.png"
                    alt=""
                  />
                  <p>
                    Adrew David
                    <span className="block text-red-600">CEO & Founder</span>
                  </p>
                </li>
              </ul>
              <ul className="list-disc marker:text-red-600">
                <li>24/7 Call Services Avilable</li>
                <li>Great Skilled Consultant</li>
                <li>Expert Team Members</li>
                <li className="py-16 list-none flex gap-3">
                  <LuPhoneCall
                    className="bg-red-600 rounded-lg p-1 "
                    size={40}
                  />
                  <p>
                    Call us anytime
                    <span className="block">+256 21458.2146</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative  ">
            <div className=" absolute  top-8 lg:-left-12 animate-[wiggle_5s_ease-in-out_infinite]">
              <img
                src="https://finbiz-react.netlify.app/assets/images/about/main/about-02.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://finbiz-react.netlify.app/assets/images/about/main/about-01.png"
                alt=""
              />
              <div className="absolute lg:bottom-10 bg-red-600 text-white flex gap-3 lg:-left-12 rounded-lg p-4 animate-[wiggle_5s_ease-in-out_infinite]">
                <h3>
                  25<sup>+</sup>
                  <span className="block">Years</span>
                </h3>
                <p>
                  Of experience <span className="block">in consulting</span>{" "}
                  service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="text-center">
          <h3 className="text-red-600 text-2xl">Our Services </h3>
          <p className="text-[40px] font-bold">High Quality Services</p>
        </div>

        <div className="container mx-auto lg:flex flex-wrap w-[1300px] py-12 justify-center bg-[url('https://finbiz-react.netlify.app/assets/images/service/bg-01.jpg')] ">
          <div className="flex gap-3 border-r-4 border-b-4 p-7">
            <div className="top-0">
              <img
                src="https://finbiz-react.netlify.app/assets/images/service/icon/01.svg"
                alt=""
              />
            </div>
            <div>
              <h3>Business Planning</h3>
              <p className="py-3">
                Sagitis himos pulvinar morb socis
                <span className="block">
                  laoreet posuere enim non auctor
                </span>{" "}
                etiam pretium libero
              </p>
              <button className="flex gap-2 hover:text-red-600">
                <FaArrowRight className="mt-1 hover:bg-red-600  bg-white rounded-full hover:text-white" />
                Read More
              </button>
            </div>
          </div>
          <div className="flex gap-3 border-r-4 border-b-4 p-7 ">
            <div className="top-0">
              <img
                src="https://finbiz-react.netlify.app/assets/images/service/icon/01.svg"
                alt=""
              />
            </div>
            <div>
              <h3>Business Planning</h3>
              <p className="py-3">
                Sagitis himos pulvinar morb socis
                <span className="block">
                  laoreet posuere enim non auctor
                </span>{" "}
                etiam pretium libero
              </p>
              <button className="flex gap-2 hover:text-red-600">
                <FaArrowRight className="mt-1 hover:bg-red-600  bg-white rounded-full hover:text-white" />
                Read More
              </button>
            </div>
          </div>
          <div className="flex gap-3 border-r-4 border-b-4 p-7 ">
            <div className="top-0">
              <img
                src="https://finbiz-react.netlify.app/assets/images/service/icon/01.svg"
                alt=""
              />
            </div>
            <div>
              <h3>Business Planning</h3>
              <p className="py-3">
                Sagitis himos pulvinar morb socis
                <span className="block">
                  laoreet posuere enim non auctor
                </span>{" "}
                etiam pretium libero
              </p>
              <button className="flex gap-2 hover:text-red-600">
                <FaArrowRight className="mt-1 hover:bg-red-600  bg-white rounded-full hover:text-white" />
                Read More
              </button>
            </div>
          </div>
          <div className="flex gap-3 border-r-4 border-b-4 p-7 ">
            <div className="top-0">
              <img
                src="https://finbiz-react.netlify.app/assets/images/service/icon/01.svg"
                alt=""
              />
            </div>
            <div>
              <h3>Business Planning</h3>
              <p className="py-3">
                Sagitis himos pulvinar morb socis
                <span className="block">
                  laoreet posuere enim non auctor
                </span>{" "}
                etiam pretium libero
              </p>
              <button className="flex gap-2 hover:text-red-600">
                <FaArrowRight className="mt-1 hover:bg-red-600  bg-white rounded-full hover:text-white" />
                Read More
              </button>
            </div>
          </div>
          <div className="flex gap-3  border-r-4 border-b-4 p-7">
            <div className="top-0">
              <img
                src="https://finbiz-react.netlify.app/assets/images/service/icon/01.svg"
                alt=""
              />
            </div>
            <div>
              <h3>Business Planning</h3>
              <p className="py-3">
                Sagitis himos pulvinar morb socis
                <span className="block">
                  laoreet posuere enim non auctor
                </span>{" "}
                etiam pretium libero
              </p>
              <button className="flex gap-2 hover:text-red-600">
                <FaArrowRight className="mt-1 hover:bg-red-600  bg-white rounded-full hover:text-white" />
                Read More
              </button>
            </div>
          </div>
          <div className="flex gap-3 border-r-4 border-b-4 p-7 ">
            <div className="top-0">
              <img
                src="https://finbiz-react.netlify.app/assets/images/service/icon/01.svg"
                alt=""
              />
            </div>
            <div>
              <h3>Business Planning</h3>
              <p className="py-3">
                Sagitis himos pulvinar morb socis
                <span className="block">
                  laoreet posuere enim non auctor
                </span>{" "}
                etiam pretium libero
              </p>
              <button className="flex gap-2 hover:text-red-600">
                <FaArrowRight className="mt-1 hover:bg-red-600 bg-white rounded-full hover:text-white" />
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto  bg-[url(https://finbiz-react.netlify.app/assets/images/cta/01.jpg)] bg-cover h-[600px] relative">
          <div className="w-full h-full bg-[#600505c8] absolute"></div>
          <h2 className="absolute  lg:py-64 pl-44 font-bold text-[40px]">
            Let’s discuss about how we
            <span className="block">can help make your</span> business better
          </h2>

          <button className=" bg-white  absolute right-[350px] sm:top-30 top-80 p-4 rounded-lg hover:bg-red-500">
            Lets work together
          </button>
        </div>
      </section>

      <section className="sm:pb-12">
        <div className="container mx-auto mt-16 ">
          <div className="relative lg:flex justify-around">
            <div className=" absolute lg:top-20 left-80 animate-[wiggle_5s_ease-in-out_infinite] border-white">
              <img
                src="https://finbiz-react.netlify.app/assets/images/business-goal/sm-01.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://finbiz-react.netlify.app/assets/images/business-goal/01.jpg"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-red-500">JUST A CONSULTANCY</h3>
              <p className="font-bold text-[50px]">
                We know how to manage
                <span className="block"> business globally</span>
              </p>
              <div className="flex py-4 gap-4">
                <img
                  src="https://finbiz-react.netlify.app/assets/images/business-goal/icon/01.svg"
                  alt=""
                />
                <div>
                  <h3>Best Business Consulting</h3>
                  <p>
                    Fusce condimentum mattis placerat odio donec lacus porta
                    torquent,
                    <span className="block">mauris gravida rutrum</span>{" "}
                  </p>
                </div>
              </div>
              <div className="flex py-4 gap-4">
                <img
                  src="https://finbiz-react.netlify.app/assets/images/business-goal/icon/02.svg"
                  alt=""
                />
                <div>
                  <h3>Best Business Consulting</h3>
                  <p>
                    Fusce condimentum mattis placerat odio donec lacus porta
                    torquent,
                    <span className="block">mauris gravida rutrum</span>{" "}
                  </p>
                </div>
              </div>
              <button className="bg-red-500 hover:bg-indigo-500 rounded-lg p-4 mt-5">
                Contact Us
              </button>
              <button className="bg-red-500 hover:bg-indigo-500 rounded-lg p-4 mt-5 mx-16">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="px-4 text-blue-500">Our Trusted Client</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>

          <div className="pl-32 ">
            <button className="shadow-2xl">
              <img
                src="https://finbiz-react.netlify.app/assets/images/client/01.png"
                alt=""
              />
            </button>
            <button className="shadow-2xl">
              <img
                src="https://finbiz-react.netlify.app/assets/images/client/02.png"
                alt=""
              />
            </button>
            <button className="shadow-2xl">
              <img
                src="https://finbiz-react.netlify.app/assets/images/client/03.png"
                alt=""
              />
            </button>
            <button className="shadow-2xl">
              <img
                src="https://finbiz-react.netlify.app/assets/images/client/04.png"
                alt=""
              />
            </button>
            <button className="shadow-2xl">
              <img
                src="https://finbiz-react.netlify.app/assets/images/client/05.png"
                alt=""
              />
            </button>
            <button className="shadow-2xl">
              <img
                src="https://finbiz-react.netlify.app/assets/images/client/01.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="bg-[url('https://finbiz-react.netlify.app/assets/images/team/bg-01.jpg')] w-full py-5">
          <div className="container mx-auto ">
            <div className="lg:text-center sm:pl-14 py-12">
              <h3 className="text-red-500">Professionals Team</h3>
              <p className="font-bold text-[40px]">Professionals Team</p>
            </div>
            <div className="lg:flex sm:pl-12 gap-16">
              <div className="group relative overflow-hidden">
                <img
                  src="https://finbiz-react.netlify.app/assets/images/team/tm/03.jpg"
                  alt=""
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="pl-20 py-5">
                  <h3 className="text-gray-500 text-2xl">Amelia Clover</h3>
                  <p className="pl-5 text-red-600">Co-Founder</p>
                </div>
              </div>
              <div className="group relative overflow-hidden">
                <img
                  src="https://finbiz-react.netlify.app/assets/images/team/tm/04.jpg"
                  alt=""
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="pl-20 py-5">
                  <h3 className="text-gray-500 text-2xl">Amelia Clover</h3>
                  <p className="pl-5 text-red-600">Co-Founder</p>
                </div>
              </div>
              <div className="group relative overflow-hidden">
                <img
                  src="https://finbiz-react.netlify.app/assets/images/team/tm/01.jpg"
                  alt=""
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="pl-20 py-5">
                  <h3 className="text-gray-500 text-2xl">Amelia Clover</h3>
                  <p className="pl-5 text-red-600">Co-Founder</p>
                </div>
              </div>
              <div className="group relative overflow-hidden">
                <img
                  src="https://finbiz-react.netlify.app/assets/images/team/tm/04.jpg"
                  alt=""
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="pl-20 py-5">
                  <h3 className="text-gray-500 text-2xl">Amelia Clover</h3>
                  <p className="pl-5 text-red-600">Co-Founder</p>
                </div>
              </div>
              <div className="group relative overflow-hidden">
                <img
                  src="https://finbiz-react.netlify.app/assets/images/team/tm/04.jpg"
                  alt=""
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="pl-20 py-5">
                  <h3 className="text-gray-500 text-2xl">Amelia Clover</h3>
                  <p className="pl-5 text-red-600">Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto bg-white lg:flex border-b-4 border-red-500">
          <div className="w-[50%] relative overflow-hidden h-[550px]">
            <div className="absolute -top-36 -left-64 animate-[wave_5s_ease-in-out_infinite] hidden lg:block">
              <img
                src="https://finbiz-react.netlify.app/assets/images/feature/shape/01.png"
                alt=""
              />
            </div>
            <div className="lg:pl-40 absolute lg:top-36 animate-[wiggle_5s_ease-in-out_infinite]">
              <img
                src="https://finbiz-react.netlify.app/assets/images/feature/01.png"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-[50%] lg:py-16 pl-12 ">
            <h3 className="text-red-600 font-medium">
              BOOST YOUR BUSINESS TODAY
            </h3>
            <p className="text-blue-500 font-bold text-[60px] ">
              Most Reliable Efficient
              <span className="block ">Consulting Agency</span>{" "}
            </p>
            <p className="font-normal py-5">
              Porttitor ornare fermentum aliquam pharetra ut facilisis gravida
              risus suscipit feugiat fusce conubia ridiculus tristique solving
              parturient natoque vulputate risu hasellus quam tincidunt posuere
              aliquam accumsan
            </p>

            <div>
              <div className="pl-16 py-12 flex gap-12 font-bold ">
                <button className="border-2 border-red-500 p-5 rounded-lg">
                  Fast Growing Sells
                </button>
                <button className="border-2 border-red-500 p-5 rounded-lg">
                  Expert Memebers
                </button>
              </div>
              <div className="pl-12 py-8 flex gap-12 font-bold ">
                <button className="border-2 border-red-500 p-5 rounded-lg">
                  24/7 Quality Services
                </button>
                <button className="border-2 border-red-500 p-5 rounded-lg">
                  Best Quality Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:flex">
          <div className="h-full animate-[wiggle_5s_ease-in-out_infinite] lg:block hidden">
            <img
              src="https://finbiz-react.netlify.app/assets/images/testimonials/shape/03.png"
              alt=""
            />
          </div>
          <div className="lg:text-left lg:pl-40  py-28 lg:w-[45%]">
            <h3 className="text-red-500">OUR TESTIMONiALS</h3>
            <p className="font-bold text-[40px] text-blue-500">
              Client'S Feedbacks
            </p>
            <span className="lg:block py-5">
              “Consectetur adipiscing elit velit porta sapien purus erat nec, a
              ornare laoreet sem gravida accumsan
              <span className="lg:block">
                in commodo aliquet nascetur maecenas. Sem tempus hendrerit diam
                mauris leo magna sociosqu{" "}
              </span>{" "}
              viverra, accumsan massa tristique egestas cum sodales hac lacinia
              feugiat scelerisque porttitor”
            </span>
          </div>
          <div className="relative ">
            <div className="w-[600px] pl-14 absolute animate-[wiggle_5s_ease-in-out_infinite] ">
              <img
                src="https://finbiz-react.netlify.app/assets/images/testimonials/shape/01.svg"
                alt=""
              />
            </div>

            <div className="relative">
              <img
                src="https://finbiz-react.netlify.app/assets/images/testimonials/01.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-700 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-red-600 font-bold">BLOG POSTS</h3>
            <p className="text-[40px] font-bold text-white">NEWS & Updates</p>
          </div>
          <div className="lg:flex lg:pl-36 gap-5 py-24">
            <div className="w-[300px]">
              <img
                src="https://finbiz-react.netlify.app/assets/images/blog/04.jpg"
                alt=""
              />
              <div className="py-5">
                <h3 className="text-white">
                  <span className="text-red-600">BUSINESS SOLUTION</span>/BY
                  DAVID DOLEAN
                </h3>
                <p className="hover:text-red-500 text-white">
                  Monkey From business Makes Your{" "}
                  <span className="block">profit</span>
                </p>
                <button className="flex py-5 gap-5 hover:text-red-500">
                  <FaArrowRight className="mt-1 border-1 rounded bg-gray-900" />
                  Read More
                </button>
              </div>
            </div>
            <div className="w-[300px]">
              <img
                src="https://finbiz-react.netlify.app/assets/images/blog/04.jpg"
                alt=""
              />
              <div className="py-5">
                <h3 className="text-white">
                  <span className="text-red-600">BUSINESS SOLUTION</span>/BY
                  DAVID DOLEAN
                </h3>
                <p className="hover:text-red-500 text-white">
                  Monkey From business Makes Your{" "}
                  <span className="block">profit</span>
                </p>
                <button className="flex py-5 gap-5 hover:text-red-500">
                  <FaArrowRight className="mt-1 border-1 rounded bg-gray-900" />
                  Read More
                </button>
              </div>
            </div>
            <div className="w-[300px]">
              <img
                src="https://finbiz-react.netlify.app/assets/images/blog/04.jpg"
                alt=""
              />
              <div className="py-5">
                <h3 className="text-white">
                  <span className="text-red-600">BUSINESS SOLUTION</span>/BY
                  DAVID DOLEAN
                </h3>
                <p className="hover:text-red-500 text-white">
                  Monkey From business Makes Your{" "}
                  <span className="block">profit</span>
                </p>
                <button className="flex py-5 gap-5 hover:text-red-500">
                  <FaArrowRight className="mt-1 border-1 rounded bg-gray-900" />
                  Read More
                </button>
              </div>
            </div>
            <div className="w-[300px]">
              <img
                src="https://finbiz-react.netlify.app/assets/images/blog/04.jpg"
                alt=""
              />
              <div className="py-5">
                <h3 className="text-white">
                  <span className="text-red-600">BUSINESS SOLUTION</span>/BY
                  DAVID DOLEAN
                </h3>
                <p className="hover:text-red-500 text-white">
                  Monkey From business Makes Your{" "}
                  <span className="block">profit</span>
                </p>
                <button className="flex py-5 gap-5 hover:text-red-500">
                  <FaArrowRight className="mt-1 border-1 rounded bg-gray-900" />
                  Read More
                </button>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white py-2 relative  ">
          <div className="flex">
            <div className="absolute -bottom-8 animate-[wave_5s_ease-in-out_infinite]">
              <img
                src="https://finbiz-react.netlify.app/assets/images/contact/shape/01.png"
                alt=""
              />
            </div>
            <div className="container mx-auto p-40 lg:flex gap-32">
              <img src="https://finbiz-react.netlify.app/assets/images/contact/01.jpg" alt="" />
              <div>
              <h3 className="text-red-700">MAKE A APPONITMENT</h3>
              <p className="text-[30px] font-bold ">Request a free quote</p>
              <form className="space-y-4">
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter your last name"
          />
        </div>

        <div>
          <textarea
            id="businessPlan"
            name="businessPlan"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Describe your business plan"
          ></textarea>
        </div>

        <div>
        
          <textarea
            id="yourTextHere"
            name="yourTextHere"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Write anything you'd like here"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
              </div>
            </div>
            <div className="absolute -top-9 right-0 animate-[wave_5s_ease-in-out_infinite]">
              <img
                src="https://finbiz-react.netlify.app/assets/images/contact/shape/01.png"
                alt=""
              />
            </div>
            
          </div>
        </div>
      </section>

      {/*<section className="py-5">
  <div className="container mx-auto bg-white lg:flex">
  <div className="w-[50%] h-[550px] bg-pink-300 relative overflow-hidden">
  <div className="w-[300px] h-[300px] bg-pink-600 absolute -top-4"> </div>
  <div className="w-[300px] h-[300px] bg-green-600 absolute top-4 left-10"> </div>
  </div>
  <div className="w-[50%]"></div>
  </div>
</section>*/}
    </>
  );
}

export default Page;
