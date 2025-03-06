import Dot from "./Dot";
import { OnboardingData } from "@/data/onboarding";

interface PaginationProps {
  slides: OnboardingData[];
  currentIndex: number
}
const Pagination = ({ slides, currentIndex }: PaginationProps) => {
  return (
    <div className="mb-4 w-full flex flex-row items-center justify-center">
      <div className="h-[24px] w-[70px] flex flex-row items-center justify-center rounded-3xl bg-gray-300">
        <div className="flex flex-row items-center gap-2">
          {slides.map((_, index) => {
            return <Dot index={index} currentIndex={currentIndex} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
