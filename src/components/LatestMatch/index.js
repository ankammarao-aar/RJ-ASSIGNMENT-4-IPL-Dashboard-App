// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-card">
          <p className="latest-competing-team">{competingTeam}</p>
          <p className="latest-date">{date}</p>
          <p className="latest-venue">{venue}</p>
          <p className="latest-venue">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-img"
        />
        <div className="latest-innings-card">
          <p className="innings">First Innings</p>
          <p className="latest-para">{firstInnings}</p>
          <p className="innings">Second Innings</p>
          <p className="latest-para">{secondInnings}</p>
          <p className="innings">Man Of The Match</p>
          <p className="latest-para">{manOfTheMatch}</p>
          <p className="innings">Umpires</p>
          <p className="latest-para">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
