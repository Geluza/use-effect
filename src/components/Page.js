import { useState } from 'react';
import List from "./List";
import Details from "./Details";

export default function Page() {
    const [info, setInfo] = useState();

    const handleClick = (user) => {
        return () => {
            setInfo(user);
        };
    };

    return (
        <div className='User'>
            <List handleClick={handleClick} />
            <Details info={info} />
        </div>
    )
}