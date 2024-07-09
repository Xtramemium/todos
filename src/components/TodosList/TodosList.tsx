import { ITodo } from '../../interfaces.ts';

interface TodosListProps {
	todos: ITodo[];
	visibleTodos: ITodo[];
	deleteTodoById: (id: string) => void;
	handleCompletionStatusChange: (id: string) => void;
	filterCompletedTodos: () => void;
	filterActiveTodos: () => void;
	deleteAllCompletedTodos: () => void;
	showAllTodos: () => void;
}
export const TodosList = ({
	todos,
	visibleTodos,
	deleteTodoById,
	handleCompletionStatusChange,
	filterCompletedTodos,
	filterActiveTodos,
	deleteAllCompletedTodos,
	showAllTodos,
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
			<button onClick={() => filterCompletedTodos()}>Выполненные</button>
			<button onClick={() => filterActiveTodos()}>Активные</button>
			<button onClick={() => deleteAllCompletedTodos()}>Удалить выполненные</button>
			<button onClick={() => showAllTodos()}>Показать все</button>
		</div>
	);
};
