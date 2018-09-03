import React, { Component } from 'react'
import EventItem from '../EventItem'
import styled from 'styled-components'

const StyledEventsList = styled.div``

export default class EventList extends Component {
  renderEventItems = events => {
    return events.map(event => {
      return (
        <EventItem
          key={event.node.url}
          event={event.node}
          status={this.props.status}
        />
      )
    })
  }

  render() {
    return (
      <StyledEventsList>
        {this.renderEventItems(this.props.events)}
      </StyledEventsList>
    )
  }
}
