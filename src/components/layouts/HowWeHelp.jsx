import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../assets/images/icon/Wallet.png'
import icon2 from '../../assets/images/icon/Category.png'
import icon3 from '../../assets/images/icon/Image2.png'

const HowWeHelp = () => {
    const data = [
        {
            title: "Experienced and passionate team",
            description: "Get strategic advice from our experts on how to grow your game.",
            icon : icon1,
            colorbg : "icon-color1"
        },
        {
            title: "Space to test and strategically iterate your mobile game",
            description: "We partner with you to try out new creative ads and monetization strategies, constantly looking for better iterations.",
            icon : icon2,
            colorbg : "icon-color2"
        },
        {
            title: "Continued access to all our resources",
            description: "You’ll not only get access to AppLovin’s mobile gaming experts, but AppLovin’s suite of online developer tools to improve and market your game.",
            icon : icon3,
            colorbg : "icon-color3"
        },
    ]
    return (
        <section className="tf-box-icon create style1 tf-section">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions mg-bt-22"   style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h2 className="tf-title pb-17">
                            How we help developers like you</h2>                         
                        </div>
                    </div>
                    {
                        data.map((item , index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>                 
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-4 col-md-6 col-12'>
    <div className="sc-box-icon">
        <div className="image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div className={`icon-create ${props.item.colorbg}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                    src={props.item.icon} 
                    alt="" 
                    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </div>                                                                             
        </div>
        <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
        <p className="content">{props.item.description}</p>
    </div>
</div>

)

export default HowWeHelp;
