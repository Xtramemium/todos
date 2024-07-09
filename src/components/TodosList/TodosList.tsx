import { ITodo } from '../../interfaces.ts';
import { ChangeEvent } from 'react';

interface TodosListProps {
	todos: ITodo[];
	deleteTodoById: (id: string) => void;
	handleCompletionStatusChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const TodosList = ({
	todos,
	deleteTodoById,
	handleCompletionStatusChange,
}: TodosListProps) => {
	console.log(todos);
	return (
		<div>
			{todos.length === 0 ? (
				<div>No todos</div>
			) : (
				todos.map((todo) => (
					<div key={todo.id}>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={(e) => handleCompletionStatusChange(e, todo.id)}
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
		</div>
	);
};
