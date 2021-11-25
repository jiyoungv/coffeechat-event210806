import shortid from 'shortid';
import img_partner_story1 from '../assets/images/img_partner_story1.png';
import img_partner_story2 from '../assets/images/img_partner_story2.png';
import img_partner_story3 from '../assets/images/img_partner_story3.png';
import img_partner_story4 from '../assets/images/img_partner_story4.png';
import img_partner_story5 from '../assets/images/img_partner_story5.png';
import img_partner_story6 from '../assets/images/img_partner_story6.png';

const partnerData = [
    {
        id: shortid.generate(),
        name: '개점휴업',
        title: 'Pre-A 단계 스타트업부터 글로벌 IT 기업까지 다양한 규모의 회사에서 서비스기획자로 일했어요!',
        image: img_partner_story1,
        link: 'https://www.coffeechat.kr/with/개점휴업',
    },
    {
        id: shortid.generate(),
        name: '릴콩',
        title: '제 커리어의 시작은 중소기업과 스타트업이었어요! 차곡차곡 이직하며 성장하고 있습니다.',
        image: img_partner_story2,
        link: 'https://www.coffeechat.kr/with/릴콩',
    },
    {
        id: shortid.generate(),
        name: '흰다',
        title: '영국 워홀 스타벅스 알바에서 영국 대기업 퍼포먼스 마케터로 취업까지!',
        image: img_partner_story3,
        link: 'https://www.coffeechat.kr/with/흰다',
    },
    {
        id: shortid.generate(),
        name: '브릭스터',
        title: '비전공으로 국비 지원 받으며 공부를 시작했고, 지금은 실리콘밸리 스타트업에서 일하고 있어요!',
        image: img_partner_story4,
        link: 'https://www.coffeechat.kr/with/브릭스터',
    },
    {
        id: shortid.generate(),
        name: '에반스',
        title: '좋은 프로덕트를 만드는 것에 관심이 많습니다. 성장에 대한 욕망이 있으시다면?',
        image: img_partner_story5,
        link: 'https://www.coffeechat.kr/with/에반스',
    },
    {
        id: shortid.generate(),
        name: '욜롤로',
        title: '빠른 은퇴를 꿈꾸지만 어쩌다가 회사를 오래 다니게 되어 싱가폴 지사 근무까지!',
        image: img_partner_story6,
        link: 'https://www.coffeechat.kr/with/욜롤로',
    },                    
];

export default partnerData;