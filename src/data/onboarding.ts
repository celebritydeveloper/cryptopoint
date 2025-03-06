import { StaticImageData } from "next/image";
import sliderOne from "@/assets/images/slider-1.png";
import sliderTwo from "@/assets/images/slider-2.png";

export interface OnboardingData {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  buttonText: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    title: "Experience the Dropbet Premier League",
    description:
      "Virtual Soccer! Right on your finger tips; Play with the top Premier League teams. Bet and feel the action.",
    image: require("@/assets/images/slider-1.png"),
    buttonText: "Continue",
  },
  {
    id: 2,
    title: "Win BIG rewards in the Airdrop by playing!",
    description:
      "Earn points when you bet, win, refer your friends and create community games for your friends to bet on.",
    image: require("@/assets/images/slider-2.jpeg"),
    buttonText: "Get Started",
  },
  {
    id: 3,
    title: "Win BIG rewards in the Airdrop by playing!",
    description:
      "Earn points when you bet, win, refer your friends and create community games for your friends to bet on.",
    image: require("@/assets/images/slider-2.jpeg"),
    buttonText: "Get Started",
  },
];

export default data;
