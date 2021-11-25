import React from 'react';
import { Heros } from './Style';
import img_hero from '../../assets/images/img_hero.png';

function Hero () {
    return (
        <Heros>
            <figure>
                <img src={img_hero} alt="커피챗을 더 잘 활용하는 특별한 방법" />
            </figure>
        </Heros>
    );
}

export default Hero;