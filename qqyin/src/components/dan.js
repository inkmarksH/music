import React, { Component } from 'react';
import Icon from 'antd/lib/icon';
import api from '../common/js/API';
import {Link} from 'react-router-dom'



class dan extends Component {
    constructor(props) {
        super();
        this.state = {
            dan: [],
            song: [],
            title: '',
            ss:{
                albumMid:'',
                songName:'',
                songMid:'',
            },
            sss:{
                singerName:'',
                singerMid:''
            }
        }
    }
    componentWillMount() {
        console.log(this.props.match.params.id);

        this.$http({
            url: api.song + this.props.match.params.id
        }).then(d => {
            console.log(d);
            this.setState({
                dan: d.data.data,
                title: d.data.data.topInfo.picAlbum,
                song: d.data.data.songList,
                ss:d.data.data.songList[0],
                sss:d.data.data.songList[0].singer
            })
        })
    }
    render() {
        var song = this.state.song.map((item, index) => {
            var name=item.singer.map(ite=>{
                return ite.singerName
             })
             var ids=item.singer.map(ite=>{
                return ite.singerMid
             })
            var sing = item.singer.map(ite=>{
               return <span key={ite.singerMid}>{ite.singerName}{item.singer.length>1?(<i>/</i>):null}</span>
            })
            return (
                <Link to={'/play/'+item.albumMid+'/'+ids+'/'+item.songName+'/'+name+'/'+item.songMid+'/'+item.songId} key={item.songId}> <dd>
                    <div className='ti'>
                        <span className='num'>{index+1}</span>
                        <span><Icon type="rise" />169%</span>
                    </div>
                    <div className="ming">
                        <h4>{item.songName}</h4>
                        <p>{sing}</p>
                    </div>
                    <span className='ico'><Icon type="download" /></span>
                </dd></Link>
            )
        })
        
        console.log(this.state.ss.albumMid);
        
        var tiao=<Link to={'/play/'+this.state.ss.albumMid+'/'+this.state.sss.singerMid+'/'+this.state.ss.songName+'/'+this.state.sss.singerName+'/'+this.state.ss.songMid+'/'+this.state.ss.songId}><div className='btn'><span> <Icon type="caret-right" /></span></div></Link>
        return (
            <div className='dans' >
                <div className="header">
                    <div className="img"><img src="https://y.gtimg.cn/music/common/upload/t_playsong_ad/1207759.png?max_age=2592000" alt="" />更多QQ音乐排行榜</div>
                    <div className="r">戳我查看</div>
                </div>
                <div className="play">
                    <img src={this.state.title} alt="" />
                    <h2>流行指数榜</h2>
                    <p>流行指数榜 第170天</p>
                    <p className='time'>更新时间：{this.state.dan.updateTime}</p>
                    {/* <div className='btn'><span> <Icon type="caret-right" /></span></div> */}
                    {tiao}
                </div>
                <div className="dlist">
                    <h3>排行榜 共{this.state.dan.totalSongNum}首</h3>
                    <dl>
                        {/* <dd>
                            <div className='ti'>
                                <span className='num'>1</span>
                                <span><Icon type="arrow-up" />169%</span>
                            </div>
                            <div className="ming">
                                <h4>You Need To Calm Down</h4>
                                <p>Taylor Swift</p>
                            </div>
                            <span className='ico'><Icon type="download" /></span>
                        </dd> */}
                        {song}
                    </dl>
                    <div className="jie">
                        <h2>榜单简介</h2>
                        <p>追踪全球音乐流行趋势，乐坛最热门歌曲，网络蹿红歌曲根据地。展示QQ音乐用户的关注热度，体现歌曲飙升程度的潮流音乐排行榜。
                            <br />
                            <br />
                            更新时间：每天更新
                            <br />
                            歌曲数量：100首
                            <br />
                            统计算法：QQ音乐库内全部歌曲，根据综合数据7天前的涨幅进行排序，取前100名
                            <br />
                            综合数据：登录用户在QQ音乐播放/分享/下载数据
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default dan;