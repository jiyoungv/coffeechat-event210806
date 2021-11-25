import React from 'react';
import { Specials } from './Style';
import img_special_tit from '../../assets/images/img_special_tit.png';
import img_special_logo from '../../assets/images/img_special_logo.png';
import img_special_reason1 from '../../assets/images/img_special_reason1.png';
import img_special_reason2 from '../../assets/images/img_special_reason2.png';
import img_special_reason3 from '../../assets/images/img_special_reason3.png';

function Special () {
    return (
        <Specials>
            <figure>
                <img src={img_special_tit} alt="고객님들이 말하는 커피챗이 특별한 이유 3가지" />
            </figure>
            <figure className="special-reason1">
                <img src={img_special_reason1} alt="주변에 찾기도 힘든 그 회사 사람과 바로 연결" />
            </figure>
            <div className="special-logo-wrap">
                <div className="special-logo">
                    <figure className="special-logo-img">
                        <img src={img_special_logo} alt="" />
                        <img src={img_special_logo} alt="" />
                    </figure>
                </div>
            </div>
            <figure className="special-reason2">
                <img src={img_special_reason2} alt="익명으로 부담없이 궁금한 것 마음껏 질문" />
            </figure>
            <figure className="special-reason3">
                <img src={img_special_reason3} alt="텍스트로는 얻을 수 없는 신뢰와 고급 정보" />
            </figure>
        </Specials>
    );
}

export default Special;