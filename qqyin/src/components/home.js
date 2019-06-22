import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Router from '../router/index'
import HomeRoutes from '../router/homerouter'


class App extends Component {
    render() {
        return (
            <div className="box">
                <div className="header">
                    <img src="http://y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000" alt="" />
                    <div className="r">下载APP</div>
                </div>
                <div className="main">
                    <div className="nav">
                        <NavLink activeClassName='select' to="/home/tui">推荐</NavLink>
                        <NavLink activeClassName='select' to="/home/list">排行榜</NavLink>
                        <NavLink activeClassName='select' to="/home/sou">搜索</NavLink>
                    </div>
                    <Router routes={HomeRoutes} />
                </div>

                <div className="footer">
                    <div className="foot">
                        安装QQ音乐 发现更多精彩
                    </div>
                </div>
            </div>
        );
    }
}

export default App;