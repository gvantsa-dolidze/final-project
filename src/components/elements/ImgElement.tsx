interface ImgElementProps {
  image?: string;
}


const ImgElement: React.FC<ImgElementProps> = ({ image }) => {
  return (
    <img src={image} alt="product" className="w-20 h-20 px-2 rounded-md bg-BackgroundGray" />
    
  )
}

export default ImgElement