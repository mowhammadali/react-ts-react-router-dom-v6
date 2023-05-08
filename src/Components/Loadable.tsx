import React , {Suspense} from 'react';

const Loadable = (Component: any) => (props: any) => {
    return  (
        <Suspense fallback = {<div>Loading ....</div>}>
            <Component {...props}/>
        </Suspense>
    )
}

export default Loadable