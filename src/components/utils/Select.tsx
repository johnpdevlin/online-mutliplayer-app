/** @format */

import {
	SelectChangeEvent,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	FormHelperText,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface SelectProps {
	label: string;
	values: (number | string)[];
	setState: Dispatch<SetStateAction<number | string | undefined>>;
	state?: number | string | undefined;
	helperText?: string;
}

const SelectComponent = ({
	label,
	values,
	state,
	setState,
	helperText,
}: SelectProps): JSX.Element => {
	const handleChange = (event: SelectChangeEvent) => {
		setState(event.target.value as number | string);
	};

	return (
		<div>
			<FormControl sx={{ p: 2, width: '100%' }}>
				<InputLabel id={`simple-${label}-select-helper-label`}>
					{label}
				</InputLabel>
				<Select
					labelId={`simple-${label}-select-helper-label`}
					id={`simple-${label}-select-helper`}
					value={state! ? state.toString() : ''}
					label={label}
					onChange={handleChange}>
					{values.map((v) => (
						<MenuItem value={v} key={v.toString()}>
							{v.toString()}
						</MenuItem>
					))}
				</Select>
				{helperText && <FormHelperText>{helperText}</FormHelperText>}
			</FormControl>
		</div>
	);
};

export default SelectComponent;
