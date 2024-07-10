import { ITodo } from '../../interfaces.ts';
import { EmptyTodosList, Todos } from '../../components';

interface TodosListProps {
	todos: ITodo[];
	visibleTodos: ITodo[];
	deleteTodoById: (id: string) => void;
	handleCompletionStatusChange: (id: string) => void;
}
export const TodosList = ({
	todos,
	visibleTodos,
	deleteTodoById,
	handleCompletionStatusChange,
}: TodosListProps) => {
	return (
		<div className="">
			{visibleTodos.length === 0 ? (
				<EmptyTodosList />
			) : (
				<Todos
					deleteTodoById={deleteTodoById}
					handleCompletionStatusChange={handleCompletionStatusChange}
					visibleTodos={visibleTodos}
				/>
			)}
			<span>Осталось задач: {todos.length}</span>
		</div>
	);
};
