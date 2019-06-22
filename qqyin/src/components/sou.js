import React, { Component } from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import {Link} from 'react-router-dom'
import api from '../common/js/API'


class Sou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: true,
            display: 'block',
            displays: 'none',
            displayss: 'none',
            list: [],
            value:''
        }
    }
    componentDidMount(){
      var dian=  document.getElementsByClassName('dian')
      var inp=  document.getElementsByClassName('inp')[0]
      var that=this
      for(var n=0;n<dian.length;n++){
          dian[n].onclick=function(){
              console.log(1,this.innerHTML);
              that.setState({
                  value:this.innerHTML
              })
              inp.value=that.state.value
              that.yin()
          }
      }
      
    }
    del(e){
        console.log(e.target.value);

        this.setState({
            displayss: 'none',
            value:e.target.value
        })
    }
    sou(e) {
        // console.log(e.target.value);
        // console.log(api.sear + e.target.value);
        this.setState({
            displayss: 'block'
        })
        this.$http({
            url: api.sear + e.target.value
        }).then(d => {
            console.log(d);
            this.setState({
                list: d.data.data.songList
            })
        })
    }
    yin() {
        this.setState({
            a: !this.state.a,
            display: this.state.a ? 'none' : 'block',
            displays: this.state.a ? 'block' : 'none',
            displayss: 'none',
            // value:''
        })
    }
    yins() {
        this.setState({
            a: !this.state.a,
            display: this.state.a ? 'none' : 'block',
            displays: this.state.a ? 'block' : 'none',
            value:''
        })
    }
    render() {
        console.log(this.state.list);
        
        var lis = this.state.list.map((item, index) => {
            var name=item.singer.map(ite=>{
                return ite.singerName
             })
             var ids=item.singer.map(ite=>{
                return ite.singerMid
             })
            var liss = item.singer.map(ite => {
                return <span key={ite.singerMid}>{ite.singerName}{item.singer.length > 1 ? (<i>/</i>) : null}</span>
            })
            return (
                <Link to={'/play/'+item.albumMid+'/'+ids+'/'+item.songName+'/'+name+'/'+item.songMid+'/'+item.songId} key={item.songId}><li key={index}>
                    <div className='icons'><Icon type="customer-service" /></div>
                    <div className='conss'><h3>{item.songName}</h3>
                        <p>{liss}</p></div>
                </li></Link>
            )
        })
        return (
            <div className="sou">
                <div className="search">
                    <div className="s1" onClick={() => { this.yin() }} style={{ display: this.state.display }}>
                        <Input
                            placeholder="搜索歌曲、歌单、专辑" allowClear
                            prefix={<Icon type="search" />}
                        />
                    </div>
                    <div className="s2" style={{ display: this.state.displays }}>
                        <Input
                        className='inp'
                            value={this.state.value}
                            type="search" placeholder="搜索歌曲、歌单、专辑" allowClear 
                            onPressEnter={(e) => { this.sou(e) }}
                            prefix={<Icon type="search" />}
                            onChange={(e) => { this.del(e) }}
                        /> <span className='qu' onClick={() => { this.yins() }}>取消</span>
                    </div>
                </div>
                <div className="con" style={{ display: this.state.display }}>
                    <h2>热门搜索</h2>
                    <p><span className='dian'>Gai见面吧电台</span><span className='dian'>MOVE YOUR BODY </span><span className='dian'>NEVER BE ALONE </span><span className='dian'>红尘来去一场梦 </span><span className='dian'>爱情有时很残忍 </span><span className='dian'>不能说的秘密 </span><span className='dian'>金庸 </span></p>
                </div>
                <div className='cons' style={{ display: this.state.displays }}>
                    <ul style={{ display: this.state.displayss }}>
                        {lis}
                        {/* <li>
                            <div className='icons'><Icon type="customer-service" /></div>
                            <div><h3>WE LIKE 2 PARTY</h3>
                                <p>BIGBANG</p></div>
                        </li> */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sou;