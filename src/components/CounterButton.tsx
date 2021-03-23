import React, { PropsWithChildren } from 'react';

interface ButtonProps {
	color: string
	handleClick: () => void;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
	const { color, children, handleClick } = props;
	return (
		<span onClick={handleClick} style={{ cursor: 'pointer', backgroundColor: color, margin: '20px', padding: '10px', border: '1px solid #ccc', 
		borderRadius: '5px'  }}>
			{children}
		</span>
	);
}

export default Button;