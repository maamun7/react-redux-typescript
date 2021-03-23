import * as React from 'react';
import { injectIntl } from 'react-intl';

interface toggleType {
	value: any;
	message: any;
	intl: any;
}

const DropdownOption = ({ value, message, intl }: toggleType) => (
	<option value={value}> {message ? intl.formatMessage(message) : value} </option>
);

export default injectIntl(DropdownOption);
