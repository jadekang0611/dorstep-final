import React from 'react';
import QuestionCard from '../../Widgets/QuestionCard';
import '../../Styles/Question.css';
import { Link } from 'react-router-dom';
import CardDeck from 'react-bootstrap/CardDeck';

function Cities() {
  return (
    <div>
      <div>
        <section className="section">
          <h1 className="question-main">What do you enjoy most?</h1>

          <p className="explanation">
            We'll use this to recommend the best place for you to live in Korea.
          </p>
        </section>

        <CardDeck>
          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Gangseo-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/active.png'}
              title={'Activities'}
            />
          </Link>

          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Gangnam-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/adventure.png'}
              title={'Adventure'}
            />
          </Link>

          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Mapo-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/calm.png'}
              title={'Tranquility'}
            />
          </Link>

          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Yongsan-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/education.png'}
              title={'Education'}
            />
          </Link>
        </CardDeck>
        <CardDeck>
          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Yongsan-gu'
              }
            }}
          >
            <QuestionCard image={'../../images/food.png'} title={'Food'} />
          </Link>
          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Yongsan-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/nightlife.png'}
              title={'Nightlife'}
            />
          </Link>
          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Yongsan-gu'
              }
            }}
          >
            <QuestionCard
              image={'../../images/shopping.png'}
              title={'Shopping'}
            />
          </Link>
          <Link
            to={{
              pathname: '/questions/payment',
              state: {
                district: 'Yongsan-gu'
              }
            }}
          >
            <QuestionCard image={'../../images/work.png'} title={'Business'} />
          </Link>
        </CardDeck>
      </div>
    </div>
  );
}

export default Cities;
