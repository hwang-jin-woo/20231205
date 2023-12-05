import {useNavigate} from "react-router-dom"
import "./css/mb.css";
import React, { useState } from 'react';
import Axios from 'axios';

export function Mb(){
        const navigate = useNavigate();

        // 사용자 정보를 담을 상태 변수들
        const [userId, setUserId] = useState('');
        const [password, setPassword] = useState('');
        const [userName, setUserName] = useState('');
        const [userBirth, setUserBirth] = useState('');
        const [userGender, setUserGender] = useState('');
        const [userLocation, setUserLocation] = useState('');
        const [userPhone, setUserPhone] = useState('');      
        // 회원가입 버튼 클릭 시 실행되는 함수
        const handleRegister = () => {
            // 서버에 회원가입 요청을 보냄
            Axios.post('http://localhost:3301/api/register', {
            user_id: userId,
            user_pw: password,
            user_name: userName,
            user_birth: userBirth,
            user_gender: userGender,
            user_location: userLocation,
            user_phone_num: userPhone,
            })
            .then((response) => {
            // 회원가입 성공 시 처리
            console.log(response.data);
            navigate('/home');
            // 회원가입 성공 후 리다이렉션 등 필요한 처리 추가
            })
            .catch((error) => {
            // 회원가입 실패 시 처리
            console.error('회원가입 오류:', error);
            });
        };

return<>
        <div id="header">
            <span className="brand-icon">HP</span>
            <h2>병원 예약시스템</h2>
        </div>
        <div id="wrapper">
            <div id="content">
                <div>
                    <h3 className="join_title">
                        <label htmlfor="id">아이디</label>
                    </h3>
                    <span className="box int_id">
                        <input placeholder="아이디"type="text" id="id" onChange={(e) => setUserId(e.target.value)} className="int" maxlength="20" />               
                        <span className="step_url"></span>
                    </span>

                </div>
                <div>
                    <h3 className="join_title"><label htmlfor="pswd1">비밀번호</label></h3>
                    <span className="box int_pass">
                        <input placeholder="비밀번호"type="text" id="pswd1"onChange={(e) => setPassword(e.target.value)} className="int" maxlength="20" />
                        <span id="alertTxt">사용불가</span>
                    </span>

                </div>
                <div>
                    <h3 className="join_title"><label htmlfor="pswd2">비밀번호 재확인</label></h3>
                    <span className="box int_pass_check">
                        <input type="text" id="pswd2" className="int" maxlength="20" />
                    </span>

                </div>
                <div>
                    <h3 className="join_title"><label htmlfor="name">이름</label></h3>
                    <span className="box int_name">
                        <input type="text" id="name" onChange={(e) => setUserName(e.target.value)}className="int" maxlength="20" />
                    </span>

                </div>
                <div>
                    <h3 className="join_title"><label htmlfor="yy">생년월일</label></h3>
                    <div id="bir_wrap">
                        <div id="bir_yy">
                            <span className="box">
                                <input type="text" id="yy" onChange={(e) => setUserBirth(e.target.value)}className="int" maxlength="4" placeholder="년(4자)" />
                            </span>
                        </div>
                        <div id="bir_mm">
                            <span className="box">
                                <select id="mm" className="sel">
                                    <option>월</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>                                    
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </span>
                        </div>
                        <div id="bir_dd">
                            <span className="box">
                                <input type="text" id="dd" className="int" maxlength="2" placeholder="일" />
                            </span>
                        </div>
                    </div>
                    <span className="error_next_box"></span>    
                </div>
                <div>
                    <h3 className="join_title"><label htmlfor="gender">성별</label></h3>
                    <span className="box gender_code">
                        <select id="gender" className="sel" onChange={(e) => setUserGender(e.target.value)}>
                            <option>성별</option>
                            <option value="0">남자</option>
                            <option value="1">여자</option>
                        </select>                            
                    </span>
                    <span className="error_next_box">필수 정보입니다.</span>
                </div>
                <div>
                    <h3 className="join_title"><label htmlfor="name">주소</label></h3>
                    <span className="box address_name">
                        <input type="address" id="address" onChange={(e) => setUserLocation(e.target.value)}className="int" maxlength="" />
                    </span>
                    <span className="error_next_box"></span>
                </div>
                <div>
                    <h3 className="join_title"><label htmlfor="email">본인확인 이메일<span className="optional"></span></label></h3>
                    <span className="box int_email">
                        <input type="text" id="email" className="int" maxlength="100" placeholder="이메일을 입력해주세요" />
                    </span> 
                </div>
                <div>
                    <h3 className="join_title"><label htmlfor="phoneNo">휴대전화</label></h3>
                    <span className="box int_mobile">
                        <input type="tel" id="mobile" onChange={(e) => setUserPhone(e.target.value)}className="int" maxlength="16" placeholder="전화번호 입력" />
                    </span>
                </div>
                <div className="btn_area">
                    <button type="submit" id="btnJoin" onClick={handleRegister}>
                        <span>가입하기</span>
                    </button>
                </div>       
            </div> 
        </div> 
    </>
}