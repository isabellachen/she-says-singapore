import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

import { Title } from '../Styles'

const Event = styled.div`
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid gold;
`
const EventDetails = styled.div``

const EventSubHeading = styled.h3`
  margin: 5px 0 15px 0;
  padding: 5px 0 5px 5px;
  background-color: gold;
  color: black;
  font-size: 1.25rem;
`

const Venue = styled.address`
  & > address {
    padding-bottom: 15px;
    margin: 0 0 5px 0;
    border-bottom: 1px solid gold;
  }
`

const EventBody = styled.div``

const EventBriteImg = styled.img`
  width: 100%;
`
const DateTime = styled.div`
  margin-top: 5px;
  & > div {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 5px;
  }
`

const renderButton = status => {
  return status === 'live' ? <button>register</button> : <button>view</button>
}

const renderAddress = event => {
  if (event.venue.address.address_2) {
    return (
      <address>
        {event.venue.address.address_2}
        <br />
        {event.venue.address.address_1}
        <br />
        {event.venue.address.city}
        <br />
        {event.venue.address.postal_code}
      </address>
    )
  } else {
    return (
      <address>
        {event.venue.address.address_1}
        <br />
        {event.venue.address.city}
        <br />
        {event.venue.address.postal_code}
      </address>
    )
  }
}

const EventItem = ({ event, status }) => {
  console.log(event)
  return (
    <Event>
      <Title>{event.name.text}</Title>
      <EventBriteImg src={event.img.original.url} />
      <EventDetails>
        <DateTime>
          <div>{moment(event.start.local).format('MMMM DD YYYY')}</div>
          <span>{moment(event.start.local).format('h:mm a')} - </span>
          <span>{moment(event.end.local).format('h:mm a')}</span>
        </DateTime>
        <Venue>
          <EventSubHeading>{event.venue.name}</EventSubHeading>
          {renderAddress(event)}
        </Venue>
        <EventBody>
          <EventSubHeading>What's On</EventSubHeading>
          {event.description.text}
        </EventBody>
        {renderButton(status)}
      </EventDetails>
    </Event>
  )
}

export default EventItem
