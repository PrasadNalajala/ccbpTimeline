// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {timelineItemsList} = props

  const {courseTitle, description, tagsList, duration} = timelineItemsList
  return (
    <div>
      <div className="titleContainer">
        <h1>{courseTitle}</h1>
        <div className="duration_container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      {tagsList.map(each => (
        <p className="span">{each.name}</p>
      ))}
    </div>
  )
}

export default CourseTimelineCard
