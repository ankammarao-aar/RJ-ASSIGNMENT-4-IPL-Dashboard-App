// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = matchCardDetails

  return (
    <li className={`match-card-list-item ${matchStatus}`}>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="match-card-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
