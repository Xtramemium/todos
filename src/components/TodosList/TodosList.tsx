import { ITodo } from '../../interfaces.ts';
import { FilterType } from '../../enums.ts';
import { Buttons } from '../../components';

interface TodosListProps {
	todos: ITodo[];
	filterType: FilterType;
	visibleTodos: ITodo[];
	deleteTodoById: (id: string) => void;
	handleCompletionStatusChange: (id: string) => void;
	showTodos: (filter: FilterType) => void;
	deleteAllCompletedTodos: () => void;
}
export const TodosList = ({
	todos,
	visibleTodos,
	filterType,
	deleteTodoById,
	handleCompletionStatusChange,
	showTodos,
	deleteAllCompletedTodos,
}: TodosListProps) => {
	return (
		<div>
			{visibleTodos.length === 0 ? (
				<div>No todos</div>
			) : (
				visibleTodos.map((todo) => (
					<div key={todo.id}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => handleCompletionStatusChange(todo.id)}
						/>
						{todo.title}
						<button
							onClick={() => {
								deleteTodoById(todo.id);
							}}
						>
							X
						</button>
					</div>
				))
			)}
			<span>Осталось задач: {todos.length}</span>
			<Buttons
				filterType={filterType}
				showTodos={showTodos}
			/>
			<button onClick={() => deleteAllCompletedTodos()}>Удалить выполненные</button>
		</div>
	);
};
