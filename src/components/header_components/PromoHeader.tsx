
interface PromoHeaderProps {
  content: string; // Define the type for the content prop
}
const PromoHeader: React.FC<PromoHeaderProps> = ({ content }) => {
  return (
    <div className="bg-[#0E1422] text-white p-2">{ content }</div>
  )
}

export default PromoHeader

