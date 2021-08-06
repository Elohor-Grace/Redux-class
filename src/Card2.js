import React, { Component } from 'react'

export default class Card2 extends Component {
    render(props) {
        return (
            <div>
                <p>{this.props.myUser.name}</p>
                <p>{this.props.myUser.age}</p>
                <p>{this.props.myUser.height}</p>
            </div>
        )
    }
}

