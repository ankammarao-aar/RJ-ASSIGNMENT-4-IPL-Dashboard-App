// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], teamRecentData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsMatches()
  }

  getTeamsMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestUpdatedData = {
      teamBannerUrl: data.team_banner_url,
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const recentUpdatedData = data.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      teamMatchesData: latestUpdatedData,
      teamRecentData: recentUpdatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamMatchesData, teamRecentData, isLoading} = this.state
    const {teamBannerUrl} = teamMatchesData
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <LatestMatch latestMatchDetails={teamMatchesData} />

            <ul className="team-recent-list-container">
              {teamRecentData.map(eachItem => (
                <MatchCard key={eachItem.id} matchCardDetails={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
