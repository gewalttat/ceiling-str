import React from 'react';
import './Map.scss';

export const Map = () => {
    
    return (
        <div className='Map'>
            <iframe title="Map"
                src="https://yandex.ru/map-widget/v1/?ll=55.941682%2C53.613462&mode=search&oid=145307769937&ol=biz&sctx=ZAAAAAgBEAAaKAoSCWsNpfYi7ktAEYV7Zd6q0UpAEhIJK4iBrn0BpT8RiUD1DyIZkj8iBgABAgMEBSgKOABA%2FooGSAFqAnJ1nQHNzEw9oAEAqAEAvQFOyJBwwgEG0biSqJ0EggIM0YHQuNC70LjQvdCzigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=55.941682%2C53.613462&sspn=0.020514%2C0.008842&text=%D1%81%D0%B8%D0%BB%D0%B8%D0%BD%D0%B3&z=16"
                width="100%"
                height="400"
                frameBorder="0"></iframe>
                
        </div>
    )
}