import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Event = styled.div`
  display: flex;
  flex-direction: column;
`
const EventDetails = styled.div`
  border: solid 1px white;
`
const Venue = styled.address`
  border: solid 1px white;
`

const EventBody = styled.div`
  border: solid 1px white;
`

const renderButton = status => {
  return status === 'live' ? <button>register</button> : <button>view</button>
}

const EventItem = ({ event, status }) => {
  return (
    <Event>
      <h1>{event.name.text}</h1>
      <EventDetails>
        <div>{moment(event.start.local).format('MMMM Do YYYY, h:mm:ss a')}</div>
        <div>{moment(event.end.local).format('MMMM Do YYYY, h:mm:ss a')}</div>
        <Venue>
          <h3>{event.venue.name}</h3>
        </Venue>
        <EventBody>{event.description.text}</EventBody>
        {renderButton(status)}
      </EventDetails>
    </Event>
  )
}

export default EventItem
