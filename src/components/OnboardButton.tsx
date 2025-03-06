interface Props {
  onClick: () => void;
  loading: boolean;
  currentIndex: number;
}

function OnboardButton({
  loading,
  onClick,
  currentIndex,
}: Props) {
  
  return (
    <button
      className="h-[50px] w-[90%] flex-row items-center justify-center rounded-full bg-[#134AFF]"
      onClick={onClick}
      disabled={loading}>
      {loading && <span className="loader absolute left-[30%]" />}
      <span className="text-center font-SFBOLD text-white">
        {currentIndex === 0 ? "Get Started" : "Continue"}
      </span>
    </button>
  );
}

export default OnboardButton;