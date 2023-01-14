import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Details({info}) {
    const [user, setUser] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (info) {
            setLoading(true);
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((e) => {
           setLoading(false);
           throw new Error('Error');
        }) 
        }
         
    }, [info]);

    return (
        <div className='Details'>
            {isLoading && <div className='LoadingWrapper'>Loading...</div>}
            {!isLoading && user && (
            <div className='user_details'>
            <div className='user_avatar'>
            <img src={user.avatar}></img>
            </div>
            <div className='user_name info_item'>{user.name}</div>
            <div className='user_city info_item'>City: {user.details.city}</div>
            <div className='user_company info_item'>Company: {user.details.company}</div>
            <div className='user_position info_item'>Position: {user.details.position}</div>
            </div>
            )}
        </div>
    )
}

Details.propTypes = {
    info: PropTypes.object,
}