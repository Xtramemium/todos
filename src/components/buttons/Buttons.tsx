import { FilterType } from '../../enums';
import { DeleteCompleted } from '../../components';
import { ITodo } from '../../interfaces';
import './Buttons.css';

interface ButtonsProps {
	todos: ITodo[];
	filterType: FilterType;
	showTodos: (filter: FilterType) => void;
	deleteAllCompletedTodos: () => void;
}

export const Buttons = ({
	filterType,
	showTodos,
	deleteAllCompletedTodos,
	todos,
}: ButtonsProps) => {
	const titleForButton = (filterType: FilterType) => {
		switch (filterType) {
			case FilterType.All:
				return 'Все задачи';
			case FilterType.Active:
				return 'Активные';
			case FilterType.Completed:
				return 'Выполненные';
		}
	};

	const buttons = Object.keys(FilterType).map((key: string) => {
		const value = Number(key);
		if (!isNaN(value)) {
			const keyType = value as unknown as FilterType;
			return (
				<button
					key={value}
					style={{
						outline: filterType === keyType ? '1px solid white' : '',
					}}
					onClick={() => {
						showTodos(keyType);
					}}
				>
					{titleForButton(keyType)}
				</button>
			);
		}
	});

	return (
		<div className="buttons">
			<div className="filter_buttons">{buttons}</div>
			<div className="delete_button">
				<DeleteCompleted
					deleteAllCompletedTodos={deleteAllCompletedTodos}
					todos={todos}
				/>
			</div>
		</div>
	);
};
