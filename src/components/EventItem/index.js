import React, { Fragment } from 'react'
import moment from 'moment'
import styled from 'styled-components'

import { Title, Button } from '../Styles'

const Event = styled.div`
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
`
const EventDetails = styled.div``

const EventSubHeading = styled.h3`
  margin: 5px 0 0 0;
  padding: 5px 0 5px 5px;
  color: black;
  font-size: 1.25rem;
  border-top: 1px solid gold;
  border-bottom: 4px solid gold;
`

const Venue = styled.address`
  font-style: normal;
  & > h2 {
    font-weight: bold;
    font-size: 1.25rem;
    margin: 5px 0 0 0;
  }
  & > address {
    padding-bottom: 5px;
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
  return status === 'live' ? <Button>register</Button> : <button>view</button>
}

const renderAddress = event => {
  const base = (
    <Fragment>
      {event.venue.address.address_1}
      <br />
      {event.venue.address.city}
      <br />
      {event.venue.address.postal_code}
    </Fragment>
  )
  if (event.venue.address.address_2) {
    return (
      <address>
        {event.venue.address.address_2}
        <br />
        {base}
      </address>
    )
  } else {
    return <address>{base}</address>
  }
}

const EventItem = ({ event, status }) => {
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
          <EventSubHeading>Where</EventSubHeading>
          <h2>{event.venue.name}</h2>
          {renderAddress(event)}
        </Venue>
        <EventBody>
          <EventSubHeading>What's On</EventSubHeading>
          <p>{event.description.text}</p>
        </EventBody>
        {renderButton(status)}
      </EventDetails>
    </Event>
  )
}

export default EventItem
