import React from 'react';

type Props = {
    callBack: any;
}

const StartButton: React.FC<Props> = ({ callBack, }) => (
    <button className="start" onClick={callBack}>Start</button>
)

export default StartButton;