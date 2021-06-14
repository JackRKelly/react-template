import React, {useState} from 'react';

export const Counter = () => {
	const [counter, setCounter] = useState(1);

	return (
		<div>
			<span>{counter}</span>
			<button
				type="button"
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				+1
			</button>
		</div>
	);
};
