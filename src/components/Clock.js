import '../resources/css/test.scss';
import React, { Component } from 'react';

class Clock extends Component{
    constructor(props) {
        super(props);
        var date1 = new Date().getFullYear(), 
            date2 = new Date().getMonth(),
            date3 = new Date().getDate(),
            day = new Date(),
            WeekDay = ['일', '월', '화', '수', '목', '금', '토'],
            week = WeekDay[day.getDay()];
        
        var hour = new Date().getHours(),
            minutes = new Date().getMinutes(),
            second = new Date().getSeconds();    

        this.state = {
            // date : new Date()
            date : `${date1}년 ${date2}월 ${date3}일 ${week}요일 ${hour}시 ${minutes}분 ${second}초`
        }
        
    };

    //컴포넌트 생명주기
    componentDidMount() {  //마운트 될 때 수행
        this.timer = setInterval(
            () => this.tick(), //1초마다 tick을 실행하는 타이머를 작성해서 컴포넌트가 마운트 될 때 타이머가 등록되게 설정
            1000
        );
    }
    componentWillUnmount() { //언마운트 시 등록한 타이머 지움
        clearInterval(this.timerID);
    }
    tick() {
        var date1 = new Date().getFullYear(), 
            date2 = new Date().getMonth(),
            date3 = new Date().getDate(),
            day = new Date(),
            WeekDay = ['일', '월', '화', '수', '목', '금', '토'],
            week = WeekDay[day.getDay()];
        
        var hour = new Date().getHours(),
            minutes = new Date().getMinutes(),
            second = new Date().getSeconds();    

        this.setState(
            // {date : new Date()}
            {
                date : `${date1}년 ${date2}월 ${date3}일 ${week}요일 ${hour}시 ${minutes}분 ${second}초`
            }
        )
    }

    render() {
        return (
            <div className="clock-box">
                <h2>현재시각</h2>
                <p>{ this.state.date.toLocaleString() }</p>
            </div>
        );
    }
}


export default Clock;