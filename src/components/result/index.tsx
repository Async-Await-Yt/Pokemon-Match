import './result.scss'

type prop = {
    score: number,
    onClick: ()=>void
}

const Result = ({score, onClick}:prop) => {
  return (
      <div id='result'>
          {score}
          <button onClick={onClick}>new game</button>
    </div>
  )
}

export default Result