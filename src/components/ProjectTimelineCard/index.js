// Write your code here
import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {timelineItemsList} = props
  const {
    projectTitle,
    imageUrl,
    description,
    projectUrl,
    duration,
  } = timelineItemsList
  return (
    <div>
      <img src={imageUrl} alt="project" className="projectImg" />

      <div className="title_container">
        <h1>{projectTitle}</h1>
        <div className="calender">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
