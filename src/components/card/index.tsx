import './card.scss'

type prop = {
  image?: string,
  flip: boolean,
  onClick: ()=>void
}

const Card = ({ image, onClick, flip }: prop) => {
  return (
    <div
      id="card"
      onClick={onClick}
      className={flip ? 'flipped' : ''}
    >
      {/* // the image is the front side of card */}
      <img src={image} alt="Pokemon" />
      {/* back side */}
      <div id="back">
      </div>
    </div>
  )
}

export default Card