"use client";
import { useEffect, useRef, useState } from "react";
import sliderOne from "@/assets/images/slider-1.png";
import sliderTwo from "@/assets/images/slider-2.png";
//import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import OnboardButton from "@/components/OnboardButton";
import Paginate from "@/components/Pagination";
import data, { OnboardingData } from "@/data/onboarding";
//import { UserService } from "../services/user";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Page } from "@/components/Page";

const slides = [
  {
    id: 1,
    title: "Experience the Dropbet Premier League",
    description:
      "Virtual Soccer! Right on your finger tips; Play with the top Premier League teams. Bet and feel the action.",
    image: sliderOne,
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Win BIG rewards in the Airdrop by playing!",
    description:
      "Earn points when you bet, win, refer your friends and create community games for your friends to bet on.",
    image: sliderTwo,
    buttonText: "Continue",
  },
  {
    id: 3,
    title: "Idris your promise say",
    description:
      "Earn points when you bet, win, refer your friends and create community games for your friends to bet on.",
    image: sliderTwo,
    buttonText: "Continue",
  },
];





export default function Onboarding() {
  const router = useRouter();
  const swiperRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      // const eventId: string | undefined = WebApp.initDataUnsafe.start_param;
      // const eventId: string | undefined = "LERODTXBAVTR";
      // if (eventId) {
      //   const event = await EventService.findEvent(eventId);
      //   if (event[0]) {
      //     return navigate(`/soccer/game-details/${eventId}`);
      //   }
      // }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      //const auth = JSON.parse(localStorage.getItem("point-splash"));
      // if(auth == null || !auth.opened) {
      //   setIsAuthenticated(false);
      // } else {
      //   setIsAuthenticated(true);
      //   router.push("/index");
      // }
    })();
  }, [isAuthenticated]);

  async function getStarted() {
    setLoading(true);
    try {
      // const res = await UserService.updateUserData();
      // localStorage.setItem("twa-user", JSON.stringify(res));
      // localStorage.setItem("twa-splash", JSON.stringify({ opened: true }));
      setLoading(false);
      router.push("/auth/signup");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <Page back={true}>
      <Swiper
        className="mySwiper"
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef?.current
        }}
        onSlideChange={() => currentIndex == 0 ? setCurrentIndex(1) : setCurrentIndex(0)}
      >
        {slides.map((slide: OnboardingData, index: number) => (
          <SwiperSlide key={index}>
            <div className="h-screen bg-white pt-4 flex flex-col justify-between overflow-hidden">
              <div className="px-3">
                <div className="rounded-16 mb-8 rounded-3xl" style={{ height: "180px", borderRadius: "16px"}}>
                  <img src={slide.image as string} className="h-full object-cover" style={{borderRadius: "16px"}} />
                </div>

                <div className="mb-12 flex flex-col items-center justify-center gap-7">
                  <h3 className="text-center font-SFMEDIUM text-[25px] font-590 text-black">{slide.title}</h3>
                  <p className="px-5 text-center font-SFREGULAR text-[14px] font-normal text-gray-500">{slide.description}</p>
                </div>

                <Paginate slides={data} currentIndex={currentIndex} />
              </div>

              <div className="h-[90px] w-full flex flex-row justify-center bg-white">
                <OnboardButton
                  onClick={() => index === 0 ? swiperRef?.current?.slideNext() : getStarted()}
                  loading={loading}
                  currentIndex={currentIndex}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Page>
  );
}
