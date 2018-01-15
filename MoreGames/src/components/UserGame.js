import React from 'react';

class UserGame extends React.Component {
    render() {
        const { details } = this.props;
        return (
            <div>
                <img src={details.image} alt={details.name} />
                <h3>{details}</h3>
                <div>{details.desc}</div>
                <span>{details.developer}</span>
                {/* add validation to use nice icons or something like that */}
                <span>{details.status}</span>
            </div>
        )
    }
}

export default UserGame;