import {useState} from 'react';

export function Counter() {
	const [counter, setCounter] = useState(1);

	return (
		<div>
			<span>{counter}</span>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				+1
			</button>
		</div>
	);
}
