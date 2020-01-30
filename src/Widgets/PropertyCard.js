import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/PropertyCard.css';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/PropertyModal.css';
import NaverMap from 'react-naver-map';

let myPlace,
  mall,
  bank = '';

async function naverPlace(lat, lng, query) {
  var url =
    'https://naveropenapi.apigw.ntruss.com/map-place/v1/search?query=' +
    query +
    '&coordinate=' +
    lng +
    ',' +
    lat +
    `&X-NCP-APIGW-API-KEY-ID=${process.env.REACT_APP_API_KEY_ID}&X-NCP-APIGW-API-KEY=${process.env.REACT_APP_API_KEY}`;
  var request = new Request(url);
  await fetch(request)
    .then(function(response) {
      return response.json();
    })
    .then(function(place) {
      if (query === '대학병원') {
        myPlace = place.places[0].road_address;
      } else if (query === '은행') {
        mall = place.places[0].road_address;
      } else if (query === '쇼핑') {
        bank = place.places[0].road_address;
      }
    })
    .catch(console.error);
}

async function geocode(address, place) {
  let adr = address.split(' ').join('+');
  var url =
    'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=' +
    adr +
    '&X-NCP-APIGW-API-KEY-ID=2cjjmuz99d&X-NCP-APIGW-API-KEY=AdOeRdhVQOCJ7590scFL1bDsQGuUbCCHk8SdYFHP';
  var request = new Request(url);
  await fetch(request)
    .then(function(response) {
      return response.json();
    })
    .then(function(geocode) {
      let x = geocode.addresses[0].x;
      let y = geocode.addresses[0].y;

      naverPlace(y, x, place);
    })
    .catch(console.error);
}

function PropertyModalScreen(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <Container>
                <Row className="carousel-row content-container-modal">
                  <Carousel>
                    {props.images.map(image => {
                      return (
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={image}
                            alt="First slide"
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </Row>
              </Container>
              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <Container>
                    <Row>
                      <NaverMap
                        clientId="2cjjmuz99d"
                        ncp // 네이버 클라우드 플랫폼 사용여부
                        style={{ width: '350px', height: '350px' }}
                        initialPosition={{ lat: 37.5332983, lng: 126.9951957 }}
                        initialZoom={8}
                        submodules={['drawing', 'geocoder']}
                      />
                    </Row>
                  </Container>
                </Row>
              </Container>
              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <h4 className="section-title-modal">Nearby Places</h4>
                  <Container className="section-content-container">
                    <hr className="section-title-line"></hr>
                    <Row className="content-modal">
                      <ul>
                        <li>Hospital: {myPlace}</li>
                        <li>Bank: {bank}</li>
                        <li>Mall: {mall}</li>
                      </ul>
                    </Row>
                  </Container>
                </Row>
              </Container>
            </Col>
            <Col xs={12} md={6} className="modal-col">
              <Container>
                <Row className="title-modal">
                  <h2>
                    {props.amount}
                    <span className="paymentType-style-modal">
                      {props.paymentType}
                    </span>
                  </h2>
                </Row>
              </Container>
              <Container className="pill-container-modal">
                <Row>
                  <Col>
                    <Badge pill className="pill-style-modal">
                      <FontAwesomeIcon icon="bed" className="icon-modal" />
                      {props.bed}
                    </Badge>{' '}
                  </Col>
                  <Col>
                    <Badge pill className="pill-style-modal">
                      <FontAwesomeIcon icon="bath" className="icon-modal" />
                      {props.bath}
                    </Badge>{' '}
                  </Col>
                  <Col>
                    <Badge pill className="pill-style-modal">
                      <FontAwesomeIcon
                        icon="vector-square"
                        className="icon-modal"
                      />
                      {props.size}
                    </Badge>{' '}
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row className="address-row-modal">
                  <p>
                    <FontAwesomeIcon
                      icon="map-marker-alt"
                      className="icon-modal"
                    />
                    <span className="address-content-modal">
                      {props.address}
                    </span>
                  </p>
                </Row>
              </Container>

              <Container>
                <Row className="button-row-modal">
                  <Button className="contact-button" size="md">
                    Contact
                  </Button>
                  <Button className="request-button" size="md">
                    Request for tour
                  </Button>
                </Row>
              </Container>

              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <h4 className="section-title-modal">Description</h4>
                  <Container className="section-content-container">
                    <hr className="section-title-line"></hr>
                    <Row className="content-modal">{props.description}</Row>
                  </Container>
                </Row>
              </Container>

              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <h4 className="section-title-modal">Features</h4>
                  <Container className="section-content-container">
                    <hr className="section-title-line"></hr>
                    <Row className="content-modal feature-content-box">
                      {props.features.map(feature => {
                        return (
                          <div className="feature-icon-box">
                            <img
                              className="feature-icon"
                              src={feature}
                              alt="feature"
                            />
                          </div>
                        );
                      })}
                    </Row>
                  </Container>
                </Row>
              </Container>
              <br></br>
              <Container>
                <Row className="content-container-modal">
                  <h4 className="section-title-modal">About the location</h4>

                  <Container className="section-content-container">
                    <hr className="section-title-line"></hr>
                    <Row className="content-modal">
                      {props.aboutTheDistrict}
                    </Row>
                  </Container>
                </Row>
              </Container>
              <Button className="contact-button-lg-modal" size="lg" block>
                Contact
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-button-modal" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function PropertyCard(props) {
  // if (myPlace != null) {
  //   hospital = myPlace;
  // }
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <PropertyModalScreen
        show={modalShow}
        onHide={() => setModalShow(false)}
        image={props.image}
        images={props.images}
        amount={props.amount}
        bed={props.bed}
        bath={props.bath}
        size={props.size}
        address={props.address}
        deposit={props.deposit}
        paymentType={props.paymentType}
        aboutTheDistrict={props.aboutTheDistrict}
        description={props.description}
        features={props.features}
        hospital={geocode(props.koreanAddress, '대학병원')}
        bank={geocode(props.koreanAddress, '은행')}
        mall={geocode(props.koreanAddress, '쇼핑')}
        koreanAddress={props.koreanAddress}
      />
      <Card className="property-card">
        <Card.Img
          variant="top"
          src={props.image}
          onClick={() => setModalShow(true)}
        />
        <Card.Body>
          <Card.Title className="property-title">
            {props.amount}{' '}
            <span className="paymentType-style">{props.paymentType}</span>
          </Card.Title>

          <Container className="pill-container">
            <Row>
              <Col className="pill-col">
                <Badge pill className="pill-style">
                  <FontAwesomeIcon icon="bed" className="icon" />
                  {props.bed}
                </Badge>
              </Col>
              <Col className="pill-col">
                <Badge pill className="pill-style">
                  <FontAwesomeIcon icon="bath" className="icon" />
                  {props.bath}
                </Badge>
              </Col>
              <Col className="pill-col">
                <Badge pill className="pill-style">
                  <FontAwesomeIcon icon="vector-square" className="icon" />
                  {props.size}
                </Badge>
              </Col>
            </Row>
          </Container>
          <Row className="address-row">
            <FontAwesomeIcon icon="map-marker-alt" className="icon" />
            <Card.Text className="address-content">{props.address}</Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default PropertyCard;
