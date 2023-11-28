import React, { useState } from 'react'
import './Card.css'
import Button from '../Button'
const Card = ({ food, onAdd, onRemuve }) => {

    const [count, setCount] = useState(0)
    const { title, price, Image } = food;
    const handleIncrement = () => {
        onAdd(food)
        setCount(count + 1)
    }

    const handleDecrement = () => {
        onRemuve(food)
        setCount(count - 1)
    }
    return (<>
        <div className='card'>
            <span className={`${count !== 0 ? "card_badge" : "card_badge-hidden"}`}>
                {count}
            </span>
            <div className='image__container'>
                <img src={Image} alt={title} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p className='cart__title  '>{title}</p>
                <p className='card__price'>${price}</p>
            </div>
            <div className='btn__conta'>
                <Button type={'add'} title={'add'} onClick={handleIncrement} />{
                    count !== 0 ? (
                        <Button type={'remove'} title={'remove'} onClick={handleDecrement} />
                    ) : ("")
                }
            </div>
        </div>
    </>
    )
}

export default Card
