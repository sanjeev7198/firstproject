import React from 'react'
import './UsersItems.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card'

const UsersItems = props => {
  return (
    <li className='user-item'>
      <div>
        <Card className='user-item__content'>
        <Link to={`/${props.id}/places`}>
        <div className='user-item__content'>
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className='user-item__info'>
          <h2>{props.name}</h2>
          <h3>{props.placeCount} {props.placesCount ===1 ? 'place' : 'places'}</h3>
        </div>
        </Link>
        </Card>
      </div>
    </li>
  )
}

export default UsersItems
