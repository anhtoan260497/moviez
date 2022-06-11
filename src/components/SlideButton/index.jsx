import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import { useState } from 'react';
import clsx from 'clsx';

SlideButton.propTypes = {
    option1 : PropTypes.string.isRequired,
    option2 : PropTypes.string.isRequired,
    handleOption : PropTypes.func, 
    optionType : PropTypes.string, // type of Popular
};

function SlideButton({option1,option2,handleOption,optionType}) {

    return (
        <div className='slide'>
            <div onClick={e => handleOption(e)} value='option1' className={clsx('slide-option',{
                active : optionType === 'option1' ? true : false
            })}>{option1}</div>
            <div onClick={e => handleOption(e)} value='option2' className={clsx('slide-option',{
                active : optionType === 'option2' ? true : false
            })}>{option2}</div>
        </div>
    );
}

export default SlideButton;