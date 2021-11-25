import styled from 'styled-components';

export const Specials = styled.section`
    .special-logo-wrap {
        padding: 37px 0 45px;
    }

    .special-logo {
        overflow-x: hidden;
        height: 128px;
    }

    .special-logo-img {
        display: flex;
        width: 618px;
        animation: ani-special-logo-img 20s linear infinite;

        img {
            flex-shrink: 0;
            width: 618px !important;
            height: 128px;
        }
    }

    @keyframes ani-special-logo-img {
        0% {transform: translateX(0);}
        100% {transform: translateX(-100%);}
    }

    .special-reason2 {
        margin-bottom: 46px;
    }
    .special-reason3 {
        margin-bottom: 23px;
    }    
`;