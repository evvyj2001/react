import '../resources/css/test.scss';
import React, { Component } from 'react';

class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
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
        this.setState(
            {date : new Date()}
        )
    }

    render() {
        return (
            <div className="clock-box">
                <h2>현재 시간은??</h2>
                <p>{ this.state.date.toLocaleString() } 입니다.</p>
            </div>
        );
    }
}

// function Clock() {

//     return (
//         <div>
//             Clock components
//         </div>
//     );
// }

export default Clock;