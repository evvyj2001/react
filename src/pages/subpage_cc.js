import '../resources/css/test.scss';
// import { Link } from 'react-router-dom';

function PageCC () {
    return(
        <>
            <div className="inner">
                <h2>참고페이지</h2>
                <div className="table-wrap">
                    <table>
                        <colgroup>
                            <col width="25%" />
                            <col width="30%" />
                            <col width="*" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>타이틀</th>
                                <th>URL</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>npm 공식 사이트</th>
                                <td>
                                    <button onClick={() => window.open('https://www.npmjs.com/')}>npmjs.com</button>
                                </td>
                                <td>플러그인 등 확인 가능</td>
                            </tr>
                            <tr>
                                <th>react-navigation</th>
                                <td>
                                    <button onClick={() => window.open('https://reactnavigation.org/docs/5.x/hello-react-navigation')}>reactnavigation.org</button>
                                </td>  
                                <td>app/moWeb용 상/하단 네비게이션 종류별 제공</td>  
                            </tr>
                            <tr>
                                <th>react-select</th>
                                <td>
                                    <button onClick={() => window.open('https://www.npmjs.com/package/react-select')}>npmjs.com/package/react-select</button>
                                </td>  
                                <td>react용 selectbox 플러그인</td>  
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PageCC;