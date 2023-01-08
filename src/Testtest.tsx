import React from "react";

interface Props {
    test: string;
}

export const Testtest = (props:Props) => {
    const {test} = props;
    return (
        <div onClick={() => {}}>
            {test}
        </div>
    );
}