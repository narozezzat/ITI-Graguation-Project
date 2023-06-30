import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css"

function Banner() {
  return (
    <Carousel className='flo'>
      <Carousel.Item>
        <img
          className="d-block w-100 ban"
          src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 ban"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;