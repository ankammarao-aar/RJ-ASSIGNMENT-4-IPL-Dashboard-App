// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsCardDetails} = props
  const {id, name, teamImageUrl} = teamsCardDetails

  return (
    <li className="team-card-list-item">
      <Link to={`/team-matches/${id}`} className="link-team-card">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <p className="team-card-heading">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
