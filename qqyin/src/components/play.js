import React, { Component } from 'react';
import Icon from 'antd/lib/icon';
import api from '../common/js/API';


class play extends Component {
    constructor(props) {
        super();
        this.state = {
            play: [],
            xin: '',
            plays: false,
            gec: [],
            dian: true,
            num: '',
            time: '',
            startX: 0,
            endX: 0,
        }
    }
    start(e) {
        this.setState({
            startX: e.touches[0].clientX,
            endX: 0
        })
    }
    move(e) {
        this.setState({
            endX: e.touches[0].clientX,
        });
    }
    end() {
        if (this.state.endX !== 0) {
            var that=this
            var time = setTimeout(function () {
                var scro = that.refs.gc
                scro.scrollTop = 0;
                clearTimeout(time)
            }, 1000)
        }
    }
    gun() {

        var gcn = this.refs.gcn;
        var ad = this.refs.music;
        var currentTime = ad.currentTime;
        var minute = Math.floor(currentTime / 60) < 10 ? '0' + Math.floor(currentTime / 60) : Math.floor(currentTime / 60);
        var second = Math.floor(currentTime % 60) < 10 ? '0' + Math.floor(currentTime % 60) : Math.floor(currentTime % 60);
        var time = minute + ":" + second;
        if (gcn) {
            for (var i = 0; i < gcn.children.length; i++) {

                if (gcn.children[i].getAttribute('time') === time) {
                    this.setState({
                        num: i,
                        time: time
                    })
                    break;
                }
            }
            console.log(this.state.num)
            gcn.style.top = -(this.state.num - 4) * 0.6 + "rem"
        }


    }
    bian() {
        this.setState({
            dian: !this.state.dian
        })
    }
    play() {
        var audio = document.getElementById('music');
        if (audio !== null) {
            if (audio.paused) {
                this.setState({
                    plays: false
                })
                audio.play();// 播放 

            } else {
                this.setState({
                    plays: true
                })
                audio.pause();// 暂停
            }
        }
    }
    componentWillMount() {
        // console.log(this.props.match.params.ssid);

        this.$http({
            url: api.play + this.props.match.params.ssid
        }).then(d => {
            // console.log(d);
            this.setState({
                play: d.data.data,
            })
        });
        this.$http({
            url: api.img + this.props.match.params.id + '/' + this.props.match.params.sid
        }).then(d => {
            // console.log(d);
            this.setState({
                xin: d.data.data.albumImgUrl,
            })
        })
        // console.log(this.props.match.params.ssid);

        this.$http({
            url: api.lrc + this.props.match.params.songid
        }).then(d => {
            var arr = d.data.data.lyric.split('[换行]')

            var Arr = [];
            for (var i = 0; i < arr.length; i++) {
                var arr2 = arr[i].split(']');
                var key = arr2[0].substr(1);
                var value = arr2[1];
                // if (value === '') {
                //     // value = key;
                //     // key = '00:00'
                // }
                key = key.substr(0, 5)
                var json = {
                    key: key,
                    value: value
                }
                Arr.push(json)
            }
            this.setState({
                gec: Arr
            })
        })
    }
    render() {
        var ged = this.state.gec.map((item, index) => {
            return (
                <p time={item.key} key={index} className={this.state.time === item.key ? 'select' : ''}>{item.value}</p>
            )
        })

        return (
            <div className='playg'>
                <div className="header">
                    <div className="img"><img src="https://y.gtimg.cn/music/common/upload/t_playsong_ad/1207759.png?max_age=2592000" alt="" />千万正版音乐 海量无损曲库</div>
                    <div className="r">立即使用</div>
                </div>
                <div className="mains" style={{
                    background: `url("${this.state.xin}")`,
                    backgroundSize: '100% 100%',
                }}>
                    <div className="mask"></div>
                </div>
                <div className="content">
                    <div className="tit">
                        <h1>{this.props.match.params.sname}</h1>
                        <h2>{this.props.match.params.name}</h2>
                    </div>
                    {this.state.dian === true ? <div className="gc" ref='gc' onClick={() => { this.bian() }}>
                        <div className="gcn" ref='gcn'
                            onTouchStart={(e) => { this.start(e) }} onTouchMove={(e) => { this.move(e) }} onTouchEnd={() => { this.end() }}
                        >{ged}</div>
                    </div> : <img onClick={() => { this.bian() }} src={this.state.xin} alt="" />}
                    <div className="cont"><span>MV</span>
                        <span onClick={() => { this.play() }}>{this.state.plays === true || this.state.plays === '' ? <Icon type="caret-right" /> : <Icon type="pause" />}</span>
                        <span><Icon type="heart" /></span></div>
                    <audio src={this.state.play[0]}
                        id='music' ref='music' autoPlay onTimeUpdate={() => { this.gun() }}></audio>
                    <div className='btn'>下载歌曲</div>
                </div>
            </div>
        );
    }
}

export default play;