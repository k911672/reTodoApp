import React from 'react'

const Item = (props) => {
    return (
        <li>
            <input type='checkbox' />
            <span>{props.content}</span>
        </li>
    )
}

export default Item