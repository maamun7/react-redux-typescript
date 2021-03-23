import * as React from 'react';
import './style.css';

import DropdownOption from '../DropdownOption';

function Dropdown(props: any) {
	let content = <option>--</option>;

	// If we have items, render them
	if (props.values) {
		content = props.values.map((value: any) => <DropdownOption key={value} message={props.messages[value]} value={value} />);
	}

	return (
		<select value={props.value} onChange={props.onSwitch} name="locale" className="locale-selection">
			{content}
		</select>
	);
}

export default Dropdown;
