interface FullRoundedImgProps {
  image: string;
}

const FullRoundedImg: React.FC<FullRoundedImgProps> = ({ image }) => {
  return (
    <img
      src={image}
      alt="product"
      className="w-16 h-16 px-3 py-2 bg-BackgroundGray rounded-full"
    />
  );
};

export default FullRoundedImg;
