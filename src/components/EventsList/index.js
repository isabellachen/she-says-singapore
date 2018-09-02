import React, { Component } from 'react'
import EventItem from '../EventItem'

export default class EventList extends Component {
  renderEventItems = events => {
    return events.map(event => {
      return <EventItem key={event.node.url} event={event.node} status={this.props.status}/>
    })
  }
  
  render() {
    console.log(this.props.events)
    return <div>{this.renderEventItems(this.props.events)}</div>
  }
}
