/** @format */

import { useState } from 'react';
import Button from './Button';
import InviteDialog from './InviteDialog';
const emails = ['username@gmail.com', 'user02@gmail.com'];
export default function InviteButton() {
	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(emails[1]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value: string) => {
		setOpen(false);
		setSelectedValue(value);
	};

	return (
		<>
			<Button text={'Invite Friends'} handleClick={handleClickOpen} />

			<InviteDialog
				selectedValue={selectedValue}
				open={open}
				onClose={handleClose}
			/>
		</>
	);
}
