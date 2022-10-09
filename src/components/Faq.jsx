import { Collapse, Row, Col, Typography } from 'antd';
import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
const { Panel } = Collapse;
const { Title } = Typography;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Faq = ({state, dispatch}) => {


  const faq = useRef();

  useEffect(() => {
    if (faq !== state.refs.faq) {
        dispatch({ type: 'setRefs', payload: { ...state.refs, 'faq': faq } })
    }
}, [state])


  return (
    <>
      <Row ref={faq} className='faqSection' justify='center' style={{ paddingTop: '100px', paddingBottom: '100px', }}>
        <Col xs={22} sm={22} md={22} lg={20} xl={20}>
          <Title level={2}>Faq</Title>

          <Row justify='center' style={{paddingTop: 60}} >
            <Col span={24}>


              <Collapse accordion>
                <Panel header="How many unique NFT's are there?" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="How do I buy an NFT?" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="What is an NFT?" key="3">
                  <p>{text}</p>
                </Panel>
                <Panel header="Where can I sell the NFT?" key="4">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Faq