import React, { useState, useEffect } from 'react';

interface Props {
	component: React.ComponentType<any>;
	items?: [];
}

const List = (props: Props) => {
	const ComponentToRender = props.component;
	let content = (<div />) as JSX.Element | JSX.Element[];

	content = <ComponentToRender item="{}" />;

	if (props.items) {
		content = props.items.map(item => <ComponentToRender key={`item-${item}`} item={item} />);
	} else {
		content = <ComponentToRender />;
	}

	return <section id="recipe-section">{content}</section>;
};

export default List;
