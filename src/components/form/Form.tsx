import { FormEvent, FC, ChangeEvent } from 'react';

interface FormProps {
	inputValue: string;
	setInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
	addTask: () => void;
}

export const Form: FC<FormProps> = ({
	inputValue,
	setInputValue,
	addTask,
}: FormProps) => {
	const onFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		addTask();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<div>
				<input
					type="text"
					value={inputValue}
					onChange={setInputValue}
				/>
				<button>Submit</button>
			</div>
		</form>
	);
};
