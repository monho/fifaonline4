import React from 'react'
import './css/userinfo.css';

const Userinfo = () => {
    return (
        <div className="Userinfo">
            <div className="info-leftarea">
                <div className="user-data">
                    <div className="userprefix">닉네임:<span className="usersuffix"></span></div>
                    <div className="userprefix">레벨:<span className="usersuffix"></span></div>
                    <div className="userprefix">역대 최고 등급:<span className="usersuffix"></span></div>
                    <div className="suffix-coltrols" id="controls"></div>
                </div>
                <div className="match-data">
                    <div className="title">10경기 평균 기록</div>
                    <div className="bar"></div>
                    <div className="matchprefix">점유율:<span className="matchsuffix"></span></div>
                    <div className="matchprefix">헤더 시도 비율:<span className="matchsuffix"></span></div>
                    <div className="matchprefix">중거리 슛 시도 비율:<span className="matchsuffix"></span></div>
                </div>
            </div>

            </div>
        
    )
}

export default Userinfo