import {Container} from 'react-bootstrap';

const Welcome = () => (
  <Container className='my-5 p-5 bg-light rounded'>
  {/* <div className="mt-5 p-5 bg-light rounded container"> */}
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p className="lead">
      <a className="btn btn-dark btn-lg" href='#learn' role="button">Learn more</a>
    </p>
  {/* </div> */}
  </Container>
);

export default Welcome;