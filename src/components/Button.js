import React from 'react'

const Button = ({ type, title, disabled, onClick }) => {
    return (
        <button className={`btn
            ${(type === 'add' && 'add') ||
            (type === "remove" && 'remove') ||
            (type === "checkout" && 'checkout')
            }`}
            disabled={disabled}
            onClick={onClick}>
            {title}
        </button>
    )
}

export default Button
