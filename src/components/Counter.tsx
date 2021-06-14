import React, {useState} from 'react';

export function Counter(): JSX.Element {
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
}
