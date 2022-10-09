import { UserOutlined } from '@ant-design/icons';
import { Carousel, Row, Col, Card, Typography, Avatar } from 'antd';
import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
const { Title, Text } = Typography;
const { Meta } = Card;


const Team = ({state, dispatch}) => {


  const team = useRef();

  useEffect(() => {
    if (team !== state.refs.team) {
        dispatch({ type: 'setRefs', payload: { ...state.refs, 'team': team } })
    }
}, [state])

  return (
    <>
      <Row ref={team} className='teamSection' justify="center" style={{ paddingTop: '100px', paddingBottom: '50px', }}>
        <Col xs={22} sm={22} md={22} lg={20} xl={20}>
          <Title level={2}>Team</Title>
          <Row gutters={[40, 40]} justify="center" style={{paddingTop: 60}}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} >
              <Card style={{ padding: '20px' }}>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Joe Random"
                  description="CEO of imaginary NFT Corp."
                >
                </Meta>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ padding: '20px' }}>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Barry Chuck"
                  description="CFO, responsible for finance."
                >
                </Meta>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ padding: '20px' }}>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Dory Forgetful"
                  description="Hogwards graduate, Art director."
                >
                </Meta>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ padding: '20px' }}>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Marlin Neverfound"
                  description="5 years experience, Chief of Marketing."
                >
                </Meta>
              </Card>
            </Col>

          </Row>

        </Col>
      </Row>
    </>
  )
}

export default Team