import { ITodo } from '../../interfaces';
import './Todos.css';

interface TodosProps {
	visibleTodos: ITodo[];
	deleteTodoById: (id: string) => void;
	handleCompletionStatusChange: (id: string) => void;
}

export const Todos = ({
	visibleTodos,
	deleteTodoById,
	handleCompletionStatusChange,
}: TodosProps) => {
	return (
		<div>
			{visibleTodos.map((todo) => (
				<div
					key={todo.id}
					className="todo_wrapper"
				>
					<div className="todo">
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => handleCompletionStatusChange(todo.id)}
						/>
						{todo.title}
					</div>
					<div className="detele_todo">
						<button
							onClick={() => {
								deleteTodoById(todo.id);
							}}
						>
							X
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
