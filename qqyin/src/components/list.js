import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import api from '../common/js/API'

class list extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    componentWillMount() {
        this.$http({
            url: api.list
        }).then(d => {
            console.log(d);
            this.setState({
                list: d.data.data
            })
        })
    }
    render() {
        var lists = this.state.list.map(item=> {
            var listss=item.songList.map(ite=>{
                return(<p key={ite.number}> <span>{ite.number}</span> {ite.songName} <span>- {ite.singerName} </span></p>)
            })
            return (<Link to={'/dan/'+item.id}  key={item.id}><dd>
                <div className="img">
                    <img src={item.picUrl} alt="" />
                </div>
                <div className="listn">
                    <h3>{item.title}</h3>
                    <div>
                        {listss}
                        {/* <p><span>1</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p> */}
                        {/* <p><span>2</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                        <p><span>3</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p> */}
                    </div>
                </div>
            </dd></Link>)
        })
        return (
            <div className="list">
                <dl className='lists'>
                    {lists}
                    {/* <dd>
                        <div className="img">
                            <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000001ioGYO1td0GY.jpg?max_age=2592000" alt="" />
                        </div>
                        <div className="listn">
                            <h3>巅峰榜·流行指数</h3>
                            <div>
                                <p><span>1</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>2</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>3</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                            </div>
                        </div>
                    </dd>
                    <dd>
                        <div className="img">
                            <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000001ioGYO1td0GY.jpg?max_age=2592000" alt="" />
                        </div>
                        <div className="listn">
                            <h3>巅峰榜·流行指数</h3>
                            <div>
                                <p><span>1</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>2</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>3</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                            </div>
                        </div>
                    </dd> <dd>
                        <div className="img">
                            <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000001ioGYO1td0GY.jpg?max_age=2592000" alt="" />
                        </div>
                        <div className="listn">
                            <h3>巅峰榜·流行指数</h3>
                            <div>
                                <p><span>1</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>2</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>3</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                            </div>
                        </div>
                    </dd> <dd>
                        <div className="img">
                            <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000001ioGYO1td0GY.jpg?max_age=2592000" alt="" />
                        </div>
                        <div className="listn">
                            <h3>巅峰榜·流行指数</h3>
                            <div>
                                <p><span>1</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>2</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>3</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                            </div>
                        </div>
                    </dd> <dd>
                        <div className="img">
                            <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000001ioGYO1td0GY.jpg?max_age=2592000" alt="" />
                        </div>
                        <div className="listn">
                            <h3>巅峰榜·流行指数</h3>
                            <div>
                                <p><span>1</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>2</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>3</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                            </div>
                        </div>
                    </dd> <dd>
                        <div className="img">
                            <img src="https://y.gtimg.cn/music/photo_new/T003R300x300M000001ioGYO1td0GY.jpg?max_age=2592000" alt="" />
                        </div>
                        <div className="listn">
                            <h3>巅峰榜·流行指数</h3>
                            <div>
                                <p><span>1</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>2</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                                <p><span>3</span> 多想在平庸的生活拥抱你 <span>- 陈雪凝</span></p>
                            </div>
                        </div>
                    </dd> */}
                </dl>
            </div>
        );
    }
}

export default list;