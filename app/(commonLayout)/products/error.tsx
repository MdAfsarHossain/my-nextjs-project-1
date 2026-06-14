'use client'

import { useEffect } from "react";

const ErrorPage = ({error, reset}: {
    error: Error & {digest?: string};
    reset: () => void;
}) => {
    // console.log(error);

    useEffect(() => {
        console.error(error)
    }, [error])
    
    return (
        <div>
            <h1 className='text-4xl font-bold text-red-600 text-center  min-h-dvh'>This is custom error page.</h1>

            <h1 className='text-4xl font-bold text-red-600 text-center  min-h-dvh'>{error?.message}</h1>

            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
};

export default ErrorPage;