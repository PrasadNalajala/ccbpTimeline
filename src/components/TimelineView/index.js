// Write your code here
import {Component} from 'react'

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div>
        <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>

        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard timelineItemsList={each} key={each.id} />
              )
            }
            return (
              <ProjectTimelineCard timelineItemsList={each} key={each.id} />
            )
          })}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
