import React from 'react';
import './UserCard.css';

function UserCard(props) {
  return (
    <div>
      {props.card &&
        <div className='user-card'>
          <div className='user-inner'>
            <a href={props.url} target="_blank" rel='noopener noreferrer'>
              <div className='user-avatar'>
                <img src={props.avatar} alt="avatar" />
              </div>
              <span>{props.name}</span>
            </a>
          </div>
        </div>
        }
      {props.error &&
        <div className='user-card'>
          <div className='user-inner'>User Not Found</div>
        </div>
      }
    </div>
  )
}

export default UserCard

