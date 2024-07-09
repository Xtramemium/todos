import { ChangeEvent, useState } from 'react';
import './App.css';
import { Form, TodosList } from './components';
import { ITodo } from './interfaces.ts';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [todos, setTodos] = useState<ITodo[]>([
		{
			id: uuidv4(),
			title: 'Learn React',
			completed: false,
		},
	]);
	const [inputValue, setInputValue] = useState<string>('');

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setInputValue(e.target.value);
	};

	const addTask = (): void => {
		const newTask = {
			id: uuidv4(),
			title: inputValue,
			completed: false,
		};
		setTodos([...todos, newTask]);
		setInputValue('');
	};

	const handleCheckboxChange = (
		_e: ChangeEvent<HTMLInputElement>,
		id: string,
	): void => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const deleteTodoById = (id: string): void => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<>
			<Form
				inputValue={inputValue}
				setInputValue={handleInputChange}
				addTask={addTask}
			/>
			<TodosList
				todos={todos}
				deleteTodoById={deleteTodoById}
				handleCheckboxChange={handleCheckboxChange}
			/>
		</>
	);
}

export default App;
