import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
import logo from '../logo.svg';
import { Col, Row, Card, Button, Input, List, Typography } from 'antd';
import heroImage from '../images/heroImage.png'
import Wireframe1 from '../images/Wireframe1.png'
import WireframeTrans3 from '../images/WireframeTrans3.png'

const { Title } = Typography;


const Hero = ({state, dispatch}) => {
    const hero = useRef(null);
    
    useEffect(() => {
        if (hero !== state.refs.hero) {
            dispatch({ type: 'setRefs', payload: { ...state.refs, 'hero': hero } })
        }
    }, [state])

    return (
        <Row ref={hero} className='heroSection' justify='center' style={{ paddingTop: '100px', paddingBottom: '100px', }}>
            <Col xs={22} sm={8} md={8} lg={8} xl={8}>
                <div >

                    <img src={WireframeTrans3} alt="heroImage" style={{ height: '10%', width: '100%', padding: '20px' }} />
                </div>
            </Col>
            <Col xs={22} sm={8} md={8} lg={8} xl={8}>
                <Title>Wireframe</Title>
                <br />
                <br />
                <p>
                    Wireframe is a template React js Cardano NFT site.
                    You can copy the code from github to get your own project going.
                    You can use the site with NMKR.io to mint NFT's on the Cardano Blockchain.
                </p>
                <br />
                <br />

                <Button size='large' type='primary' block={true} target="_blank" style={{borderRadius: 20}} href='https://github.com/NotaCodeur/nft-page'>
                    Call To Action !
                </Button>
                {/* <Row align='center' justify='center'>
                    <Col span={24} align='center' style={{
                        position: 'absolute',
                        bottom: 20,
                        zIndex: 1,
                        transition: 'all 0.2s',
                    }}>
                        <Row
                            className='createListBottomRow'
                            gutter={[20, 20]}
                            justify='center'
                        >
                            <Col span={24}  align='center'>
                                <Button block={true}>Call To Action !</Button>
                            </Col>
                        </Row>
                    </Col>

                </Row> */}
            </Col>
        </Row>
    )
}

export default Hero