import { Divider, Steps, Row, Col, Typography } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
const { Step } = Steps;
const { Title } = Typography;


const Roadmap = ({state, dispatch}) => {
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };

  
  const roadmap = useRef();

  useEffect(() => {
    if (roadmap !== state.refs.roadmap) {
        dispatch({ type: 'setRefs', payload: { ...state.refs, 'roadmap': roadmap } })
    }
}, [state])


  return (
    <>
      <Row ref={roadmap} className='roadmapSection' justify="center" style={{ paddingTop: '100px', paddingBottom: '50px', }}>
        <Col xs={22} sm={22} md={22} lg={20} xl={20}>


          <Title level={2}>Roadmap</Title>

          <Row justify="center">
            <Col span={24}>
              <Steps current={current} onChange={onChange} style={{paddingTop: 60}}>
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>

              <Divider />


              <Steps current={current} onChange={onChange} direction="vertical">
                <Step title="Step 1" description="This is a description." />
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
              </Steps>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Roadmap