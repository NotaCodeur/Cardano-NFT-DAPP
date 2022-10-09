import { Carousel, Row, Col, Card, Typography, Button, Space } from 'antd';
import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import Wireframe1 from '../images/Wireframe1.png'
import Wireframe2 from '../images/Wireframe2.png'
import Wireframe3 from '../images/Wireframe3.png'


const { Title, Text } = Typography;

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Meta } = Card;


const Art = ({ state, dispatch }) => {


  const [activeArt, setActiveArt] = useState(1);
  const [artSize, setArtSize] = useState('20vw');
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  useEffect(() => {
    if (screenSize < 480) {
      setActiveArt(2);
      setArtSize('80vw');
    } else if (screenSize < 900) {
      setActiveArt(2);
      setArtSize('60vw');
    } else if (screenSize < 1200) {
      setActiveArt(3);
      setArtSize('40vw');
    } else if (screenSize < 1500) {
      setActiveArt(4);
      setArtSize('20vw');
    } else if (screenSize > 1500) {
      setActiveArt(5);
      setArtSize('20vw');
    }
  }, [screenSize]);

  const art = useRef();

  useEffect(() => {
    if (art !== state.refs.art) {
      dispatch({ type: 'setRefs', payload: { ...state.refs, 'art': art } })
    }
  }, [state])

  const images = [
    {
      original: Wireframe1,
      name: "Wireframe01",
      buyLink: "https://pay.nmkr.io/?p=e2ed3be50e5c4a71af5e4afebe433830&n=b43c38be93c845c7b22986ceadc5fad8",
      id: 1
    },
    {
      original: Wireframe2,
      name: "Wireframe02",
      buyLink: "https://pay.nmkr.io/?p=e2ed3be50e5c4a71af5e4afebe433830&n=17ae8093c869492cae18298bfe1bbfca",
      id: 2
    },
    {
      original: Wireframe3,
      name: "Wireframe03",
      buyLink: "https://pay.nmkr.io/?p=e2ed3be50e5c4a71af5e4afebe433830&n=b0e9f4c89707473f9e55ae84aa738bf3",
      id: 3
    }
  ];



  return (
    <>
      <Row ref={art} className='artSection' justify='center' style={{ paddingTop: '100px', paddingBottom: '50px', }}>
        <Col xs={24} sm={24} md={24} lg={20} xl={20}>
          <Title level={2}>Art</Title>
          <Row justify='center'>
            <Col span={24}>

              <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {images.map((image) => (


                  <SwiperSlide key={image.id} style={{ paddingLeft: 0, paddingTop: 60, paddingBottom: 100, width: artSize }}>
                    <Card
                      hoverable
                      style={{
                        width: artSize,
                        borderRadius: 40
                      }}
                      cover={<img alt="example" src={image.original} style={{
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                      }} />}
                      actions={[
                      ]}
                    >
                      <Title level={3}>
                        {image.name}
                      </Title>
                      <br />
                      <Button alignItems='center' justify='center' align='middle' size='large' block={true} onClick={() => window.open(image.buyLink)} target="_blank" style={{ borderRadius: 60, padding: 10, height: 'auto' }}>
                        <div>
                          <Space>

                            <Title style={{ paddingTop: 4 }} level={3}>Buy Now!</Title>
                          </Space>
                        </div>
                      </Button>
                    </Card>
                  </SwiperSlide>
                ))}



              </Swiper>
              <br />
              <br />
              {/* <Carousel autoplay>
                
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>

              </Carousel> */}
            </Col>
          </Row>
        </Col>
      </Row >
    </>
  )
}

export default Art