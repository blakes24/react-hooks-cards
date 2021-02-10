import { useState } from 'react';

const useFlip = () => {
	const [ state, setState ] = useState(true);

	function toggleFlip() {
		setState(!state);
	}
	return [ state, toggleFlip ];
};

export default useFlip;
