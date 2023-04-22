import { forwardRef } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { FieldErrors, FieldValues, TFieldValues } from 'react-hook-form';

import asm from 'asm-ts-scripts';

import { Typography } from '../Typography';

import typography from '../Typography/Typography.module.scss';
import cs from './commonStyle.module.scss';

export type EmailInputElement = HTMLInputElement;

export interface EmailInputProps extends ReactHTMLElementAttributes<EmailInputElement> {
	register?: FieldValues;
	errors?: FieldErrors<TFieldValues>;
}

export const EmailInput = forwardRef<EmailInputElement, EmailInputProps>(({
	register,
	errors,
	placeholder,
	children,
	...rest
}, ref) => {
	const errorMessage = errors ? errors[register?.name]?.message : '';

	return (
		<div className={cs.container}>
			<Typography component="h5">{children}</Typography>
			<div className={cs.inputBlockContainer}>
				<label>
					<input
						type="email"
						className={asm.join(cs.input, typography.input)}
						placeholder={placeholder}
						ref={ref}
						{...register}
						{...rest}
					/>
				</label>
				{register && (
					<Typography component="p2" className={asm.join(cs.error)}>
						{typeof errorMessage === 'string' && errorMessage}
					</Typography>
				)}
			</div>
		</div>
	);
});

EmailInput.displayName = 'EmailInput';
