import React from 'react';
import './Input.sass'

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');
    }
    console.log(inputClasses)
    switch (props.elementType) {
        case ('input'):
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} className={inputClasses.join(' ')} />;
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed} className={inputClasses.join(' ')} />;
            break
        case ('select'):
            inputElement = <select value={props.value} onChange={props.changed} className={inputClasses.join(' ')}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}
            </select>;
            break
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} className={inputClasses.join(' ')} />;
    }
    return (
        <div className="Input">
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;