import { ITodo } from '../../interfaces';

interface DeleteCompletedProps {
	todos: ITodo[];
	deleteAllCompletedTodos: () => void;
}
export const DeleteCompleted = ({
	deleteAllCompletedTodos,
	todos,
}: DeleteCompletedProps) => {
	const checkIfCompleted = todos.every((todo) => {
		return !todo.completed;
	});
	return (
		<div>
			<button
				disabled={checkIfCompleted}
				onClick={deleteAllCompletedTodos}
			>
				Удалить все выполенные
			</button>
		</div>
	);
};
