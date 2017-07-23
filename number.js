import React from 'react';
import numeral from 'numeral';

export default function number({number}) {
	if (number >= 1000) {
		return <span>{numeral(number).format('0.000 a')}</span>
	} else {
		return <span>{number}</span>
	}
}