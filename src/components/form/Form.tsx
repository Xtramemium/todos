import { FormEvent, FC, ChangeEvent } from 'react';
import './Form.css';

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
		<form
			className="form"
			onSubmit={onFormSubmit}
		>
			<div className="input_wrapper">
				<div className="form_input">
					<input
						placeholder="Enter new task"
						type="text"
						value={inputValue}
						onChange={setInputValue}
					/>
				</div>
				<button disabled={!inputValue}>Submit</button>
			</div>
		</form>
	);
};
