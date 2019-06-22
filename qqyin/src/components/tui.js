import React, { Component } from 'react';
import Carousel from 'antd/lib/carousel'

import api from '../common/js/API'
// import Item from 'antd/lib/list/Item';
class tui extends Component {
    constructor() {
        super();
        this.state = {
            banner: [],
            dan: []
        }
    }
    componentWillMount() {
        this.$http({
            url: api.top
        }).then(d => {
            console.log(d);
            this.setState({
                banner: d.data.data.slider,
                dan: d.data.data.radioList,
            })
        })
    }
    render() {
        var el = this.state.banner.map((item, index) => {
            return (<div key={index}>
                <h3><img src={item} alt="" /></h3>
            </div>)
        })
        var lis = this.state.dan.map(item => {
            return (<li key={item.id}><div className="img"><img src={item.picUrl} alt="" /></div><p>{item.title}</p></li>)
        })
        return (
            <div className='min'>
                <Carousel autoplay dotPosition='bottom'>
                    {el}
                </Carousel>
                <div className="mins">
                    <h2>电台</h2>
                    <ul>
                        {lis}
                        {/* <li><div className="img"><img src="https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000" alt="" /></div><p>一人一首招牌歌</p></li> */}
                    </ul>
                </div>
                <div className="fo">
                    <p>查看电脑版网页</p>
                    <p><img src="https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo_footer.png?max_age=2592000&v=0b997108f6088df4b8f515bf4d4869cb" alt="" /></p>
                    <p>Copyright © 1998 - <span>2019</span>  Tencent. All Rights Reserved.</p>
                </div>
            </div>
        );
    }
}

export default tui;