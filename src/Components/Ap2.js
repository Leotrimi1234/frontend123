import React, { useEffect, useState } from 'react';

function Ap2() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/reviews')
            .then(response => response.json())  // Gabimi `.jason()` u korrigjua
            .then(data => setItems(data.data))  // Ruajmë vetëm `data` array
            .catch(error => console.error('Gabim:', error));
    }, []);

    return (
        <div className='bg-blue-100 flex  flex-col justify-center items-center'>
            <h1 className='font-serif text-2xl'>Lista e Items</h1>
            <ul className=''>
                {items.map(item => (
                   <li className='bg-yellow-300  p-4 border border-red-600' key={item.id}>
                     <strong className=''>Emri:</strong> {item.Emri} <br />
                    <strong>Ratings:</strong> {item.Ratings} ⭐ <br />
                    <strong>Pershkrimi:</strong> {item.Pershkrimi[0].children[0].text}<hr/> <br/>


                   </li>
                    
                ))}
            </ul>
        </div>
    );
}

export default Ap2;
