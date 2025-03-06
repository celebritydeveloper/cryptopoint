interface DotProps {
  index: number;
  currentIndex: number
}

const Dot = ({index, currentIndex}: DotProps) => {
  return (
    <div
      className={`flex h-3 w-3 rounded-lg text-gray4 ${currentIndex == index ? "bg-[#134AFF]" : "bg-[#020441]" }`}
      key={index}
    />
  );
};

export default Dot;
