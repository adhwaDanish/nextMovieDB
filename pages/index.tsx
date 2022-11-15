import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import Footer from "./layouts/footer"
import {useRef} from 'react'



{/*export async function getServerSideProps(){

export async function getServerSideProps(){
>>>>>>> 9b966bd (updating latest)
  const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=7c68e1cb1635d0fc032672a17095c7fe')
  const data = await response.json()
   //console.log("response",response) //checking the data
  
  return {
    props:{ data}
  }

*/}

export default function Home(props: any) {
  console.log(props)
  /*const handleToggledValue = (selectedValue: any) =>{
  console.log(selectedValue)
  }*/
  return (
    <div className=" bg-white h-max-screen ">
      {/* NavBar items */}
      <div className='bg-primary grid place-items-center'>

        <div className="text-white grid grid-cols-7 gap-8  px-7 md:max-w-[1600px] h-11">
          <div className='shrink-0 col-start-1 col-end-3'>
            <div>

            
              <div className='inline-block'>
              <a href='http://localhost:3000/'><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo"  className="inline-block object-scale-down h-11 w-20"/></a>
              </div>
              
              <div className=' inline-flex'>
                    {/*to create a nav bar with no hover
                    <li >
                      <a href={link.url}>{link.name}</a>
                    </li>
                    */}
                    
                    <div className='relative'>
                      <button className="peer px-2 py-2 text-white bg-transparent font-bold">Movies</button>
                        <div className="hidden peer-hover:flex hover:flex absolute w-auto flex-col bg-white rounded drop-shadow-lg">
                        <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Popular</a>
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Airing Today</a>
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">On TV</a>
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Top Rated</a>
                        </div>
                    </div>
                    <div className=' relative'>
                      <button className="peer px-2 py-2 bg-transparent font-bold">TV Shows</button>
                        <div className="hidden peer-hover:flex hover:flex absolute w-fit flex-col bg-white rounded drop-shadow-lg">
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Popular</a>
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Airing Today</a>
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">On TV</a>
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Top Rated</a>
                        </div>
                    </div>
                    <div className=' relative'>
                      <button className="peer px-2 py-2 bg-transparent font-bold">People</button>
                        <div className="hidden peer-hover:flex hover:flex  w-auto absolute flex-col bg-white rounded drop-shadow-lg">
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Popular people</a>                 
                        </div>
                    </div>
                    <div className=' relative'>
                      <button className="peer px-2 py-2 bg-transparent font-bold">More</button>
                        <div className="hidden peer-hover:flex hover:flex  w-auto absolute flex-col bg-white rounded drop-shadow-lg">
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Discussion</a>
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Leaderboard</a>
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">Support</a>
                          <a className="px-5 py-1 hover:bg-gray-200 hover:rounded text-black" href="#">API</a>
                        </div>
                    </div>
              </div>
              </div>
            </div>

                <div className='relative col-start-7 col-end-8'>
                  <div className=' relative   font-bold'>
                    <ul>
                      <li className="px-2 py-2"><a href="https://www.themoviedb.org/login">Login</a></li>
                    </ul>
                  </div>
                </div>
                  
        </div>
      </div>

      {/* banner item */}
        <div className='grid place-items-center'>
        <div className="bg-[center_top]  bg-cover bg-banner mx-20 pb-32">
          
          <div className="font-bold text-5xl px-10 pt-12 text-white z-20 ">
            <h3>Welcome.</h3>
          </div>
          <div className="font-semibold text-3xl px-10 pb-10 text-white">
            Millions of movies, TV shows and people to discover. Explore now.
          </div>
          

          <div className="w-11/12 px-10 relative z-0 pr-10">
            <div className='w-full inline-block absolute z-10'>
              <input className=" w-full bg-white  text-black  focus:border-none rounded-3xl mt-5 pl-5 h-10 border-spacing-y-0.5 focus:outline-0" type={"text"} 
                placeholder="Search for a movie, tv show, person......."/>
            </div>
            <div className='z-20 order-2 relative float-right inline-block'>
              <button className=" float-right bg-teal-400 mt-5 h-10 px-5 text-white absolute rounded-3xl mr-10 hover:text-black">Search</button>
            </div>
            

          </div>


        </div>
        </div>
        
        {/* swiper */}
        <div>
          <div className="pl-12 text-xl">

            {/*<Section title="What's popular" items={["Streaming", "On TV", "For Rent", "In Theatres"]} onToggle={handleToggledValue} children={undefined}></Section>

             swiper <Section title="What's popular" items={["Streaming", "On TV", "For Rent", "In Theatres"]} onToggle={handleToggledValue} children={undefined}></Section>*/}

            
          </div>
          <div className="grid place-items-center">
              <div className="flex h-auto max-w-[70%] min-w-[70%] pb-5 pt-5 bg-white">
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={7}
                navigation
                
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <div className="grid place-items-center">
                    <div className=' bg-transparent'>
                      <img className=" object-scale-down h-48 w-auto rounded-lg bg-transparent" src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" alt="joker" width={72} height={40}/>
                    </div>

                    <a className="font-semibold text-black  hover:text-sky-600">Dahmer - Monster : The Jeffrey Dahmer Story</a>
                    <a className='text-black'>sep 21, 2022</a>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid place-items-center">
                    <div className=' bg-transparent'>
                      <img className=" object-scale-down h-48 w-auto rounded-lg bg-transparent" src="https://www.themoviedb.org/t/p/w220_and_h330_face/f2PVrphK0u81ES256lw3oAZuF3x.jpg" alt="joker" width={72} height={40}/>
                    </div>
                    <a className="font-semibold text-black  hover:text-sky-600">Dahmer - Monster : The Jeffrey Dahmer Story</a>
                    <a className='text-black'>sep 21, 2022</a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid place-items-center">
                    <div className=' bg-transparent'>
                      <img className=" object-scale-down h-48 w-auto rounded-lg bg-transparent" src="https://www.themoviedb.org/t/p/w220_and_h330_face/hYqOjJ7Gh1fbqXrxlIao1g8ZehF.jpg" alt="joker" width={72} height={40}/>
                    </div>
                    <a className="font-semibold text-black  hover:text-sky-600">All Quiet on the Western Front</a>
                    <a className='text-black'>Oct 07, 2022</a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid place-items-center">
                    <div className=' bg-transparent'>
                      <img className=" object-scale-down h-48 w-auto rounded-lg bg-transparent" src="https://www.themoviedb.org/t/p/w220_and_h330_face/xDgnmbdWS59NtTPdzujdZGuPUPZ.jpg" alt="joker" width={72} height={40}/>
                    </div>
                    <a className="font-semibold text-black  hover:text-sky-600">Blackout</a>
                    <a className='text-black'>Oct 12, 2022</a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid place-items-center">
                    <div className=' bg-transparent'>
                      <img className=" object-scale-down h-48 w-auto rounded-lg bg-transparent" src="https://www.themoviedb.org/t/p/w220_and_h330_face/1xeiUxShzNn8TNdMqy3Hvo9o2R.jpg" alt="joker" width={72} height={40}/>
                    </div>
                    <a className="font-semibold text-black hover:text-sky-600">Manifest</a>
                    <a className='text-black'>Sep 24, 2018</a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid place-items-center">
                    <div className=' bg-transparent'>
                      <img className=" object-scale-down h-48 w-auto rounded-lg bg-transparent " src="https://www.themoviedb.org/t/p/w220_and_h330_face/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg" alt="joker" width={72} height={40}/>
                    </div>
                    <a className="font-semibold text-black hover:text-sky-600">Fullmetal Alchemist: The Final Alchemy</a>
                    <a className='text-black'>24 Jun, 2022</a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid place-items-center">
                    <div className=' bg-transparent'>
                      <img className=" object-scale-down h-48 w-auto rounded-lg bg-transparent" src="https://www.themoviedb.org/t/p/w220_and_h330_face/tiuzjuzalHj377XER1sfq7XQEIT.jpg" alt="joker" width={72} height={40}/>
                    </div>
                    <a className="font-semibold text-black hover:text-sky-600">American Horror Story</a>
                    <a className='text-black'>Oct 05, 2021</a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="grid place-items-center">
                    <div className=' bg-transparent'>
                      <img className=" object-scale-down h-48 w-auto rounded-lg bg-transparent" src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" alt="joker" width={72} height={40}/>
                    </div>

                    <a className="font-semibold text-black hover:text-sky-600">American Horror Story</a>
                    <a className='text-black'>Oct 05, 2021</a>

                  </div>
                </SwiperSlide>

              </Swiper>
          </div>
          </div>
        </div>
      

        {/* Join Today */}
        <div className='grid place-items-center '>
          <div className="max-w-[80%] min-w-[50%] bg-[center_top]  bg-cover bg-banner2">
            <div className="px-20 py-10">
              <h2 className="font-bold text-2xl pb-5">Join Today</h2> 
                <div className='flex'>
                  <div className='w-2/3'>
                    <p className='pb-5'>Get access to maintain your own 
                      <em className='text-slate-400'> custom personal lists </em>, 

                      <em className='text-slate-400'>track what you&apos;ve seen </em>
                      and search and filter for 
                      <em className='text-slate-400'> what to watch next </em>
                      regardless if it&apos;s in theatres, on TV or available

                      <em className='text-slate-400'>track what you&apos;ve seen </em>
                      and search and filter for 
                      <em className='text-slate-400'> what to watch next </em>
                      regardless if it&apos;s in theatres, on TV or available

                      on popular straming services like Hotstar, Netflix, iflix and Viu.</p>
                      <a className="rounded-md bg-violet-600 block px-3 py-1 w-fit" href="">Sign Up</a>
                  </div>
                  <div className='ml-10 w-1/3'>
                    <ul className='list-disc'>
                      <li>Enjoy TMDB ad free</li>
                      <li>Maintain a personal watchlist</li>
                      <li>Filter by your subscribed streaming services and find something to watch</li>

                      <li>Log the movies and TV shows you&apos;ve seen</li>

                      <li>Log the movies and TV shows you&apos;ve seen</li>

                      <li>Build custom lists</li>
                      <li>Contribute to and improve our database</li>
                    </ul>
                  </div>
              </div>
              
              
            </div>
            
          </div>
        </div>
    

        {/* footer call */}
        <Footer/>
    </div>
  )
}


