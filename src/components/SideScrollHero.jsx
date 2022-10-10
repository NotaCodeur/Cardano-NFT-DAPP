import React, { useState, useEffect, useRef } from 'react';

import './SideScrollHero.scss'
import WireframeTrans3 from '../images/WireframeTrans3.png'
import { Col, Row, Card, Button, Input, List, Typography } from 'antd';


const SideScrollHero = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);


    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    useEffect(() => {
        if (screenSize < 575) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);



    /* Set width of all animated text to match container */
    let parent = document.querySelectorAll('.animate-text');
    for (let i = 0; i < parent.length; i++) {
        parent[i].style.width = parent[i].children[0].clientWidth + "px";
    };
    return (
        <>
            <div className='sideScrollHeroSection'>

                <div class="bg-text-container">
                    <body className='bodyScrollHero'>
                        <div class="animate-text">
                            <span className='spanScollHero'>Cardano&nbsp;</span>
                            <span className='spanScollHero'>Cardano&nbsp;</span>
                            <span className='spanScollHero'>Cardano&nbsp;</span>
                        </div>
                        {/* </body>
                <body className='bodyScrollHero left'> */}
                        <div class="animate-text left">
                            <span className='spanScollHero'>NFT's&nbsp;</span>
                            <span className='spanScollHero'>NFT's&nbsp;</span>
                            <span className='spanScollHero'>NFT's&nbsp;</span>
                        </div>
                    </body>
                </div>



                <ul class="sideHeroTextcontainer">
                    {activeMenu ? (
                        <Row gutter={[40, 40]}>


                            <Col xs={22} sm={10} md={10} lg={10} xl={10}>
                                <div class="colScrollHero">

                                    <h1 className='h1ScrollHero'>Wireframe</h1>
                                    <p className='pcolScrollHero'>Ever dreamt about your own Cardano dApp ?
                                        Now it's easier than ever! Copy and paste the code of this project from github 👇</p>
                                    <br />
                                    <button className='buttonScrollHero' target="_blank" style={{borderRadius: 20}} href='https://github.com/NotaCodeur/Cardano-NFT-DAPP'>GitHub</button>
                                </div>
                            </Col>
                            <Col xs={22} sm={14} md={14} lg={14} xl={14} >
                                <div class="colTwoScrollHero">
                                    <img src={WireframeTrans3} alt="heroImage" style={{ height: '15%', width: '100%', padding: '20px' }} />

                                </div>
                            </Col>
                        </Row>
                    )
                        : (
                            <Row gutter={[40, 40]}>

                                <Col xs={22} sm={14} md={14} lg={14} xl={14} >
                                    <div class="colTwoScrollHero">
                                        <img src={WireframeTrans3} alt="heroImage" style={{ height: '15%', width: '100%', padding: '20px' }} />

                                    </div>
                                </Col>
                                <Col xs={22} sm={10} md={10} lg={10} xl={10}>
                                    <div class="colScrollHero">

                                        <h1 className='h1ScrollHero'>Wireframe</h1>
                                        <p className='pcolScrollHero'>Ever dreamt about your own Cardano dApp ?
                                            Now it's easier than ever! Copy and paste the code of this project from github 👇</p>
                                        <br />
                                        <button className='buttonScrollHero' target="_blank" style={{borderRadius: 20}} href='https://github.com/NotaCodeur/Cardano-NFT-DAPP'>GitHub</button>
                                    </div>
                                </Col>

                            </Row>

                        )}
                </ul>
            </div>
        </>
    )
}

export default SideScrollHero