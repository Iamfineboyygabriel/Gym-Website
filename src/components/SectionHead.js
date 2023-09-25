
const SectionHead = ({icon, title, className}) => {
  return (
    // <div className={`icon, title, className ${className}`}>
    //     <span>{icon}</span>
    //     <h2>{title}</h2>
    // </div>

    <div className="section__head">
        <span>{icon}</span>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionHead;