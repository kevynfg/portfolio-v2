'use client'

import { useEffect } from "react";

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div>
            <p>Alguma coisa deu errado...pode dar um refresh na página?</p>
        </div>
    )
}