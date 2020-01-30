import React from 'react';
import Card from 'react-bootstrap/Card';

class QuestionCard extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '15rem' }} className="cardStyle">
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title className="card-title">{this.props.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default QuestionCard;
