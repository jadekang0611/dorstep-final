import React from 'react';
import PropertyCard from '../Widgets/PropertyCard';
import { properties } from '../properties';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/ShowProperties.css';

function ShowProperties(props) {
  let results = properties.filter(function(item) {
    if (
      item.district === props.location.state.district &&
      item.paymentType === props.location.state.payment
    ) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <Container className="show-titles">
        <h1 className="question-main">Rental Listing</h1>
        <h4 className="result-title">{results.length} results</h4>
      </Container>
      <Container>
        <Row>
          {results.map(property => {
            return (
              <Col
                xs={12}
                md={6}
                lg={4}
                key={property.id}
                className="property-card-col"
              >
                <PropertyCard
                  image={property.images[0]}
                  images={property.images}
                  features={property.features}
                  amount={`\u20A9 ` + property.amount}
                  paymentType={property.paymentType}
                  bed={property.noOfBed}
                  bath={property.noOfBath}
                  size={property.size}
                  address={property.district + `, ` + property.city}
                  deposit={property.deposit}
                  aboutTheDistrict={property.about}
                  description={property.description}
                  koreanAddress={property.koreanAddress}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ShowProperties;
