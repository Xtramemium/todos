import { ChangeEvent, useEffect, useState } from 'react';
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
		{
			id: uuidv4(),
			title: 'use Effect',
			completed: false,
		},
		{
			id: uuidv4(),
			title: 'Use State',
			completed: false,
		},
		{
			id: uuidv4(),
			title: 'Find a job',
			completed: false,
		},
	]);
	const [visibleTodos, setVisibleTodos] = useState<ITodo[]>([...todos]);
	const [inputValue, setInputValue] = useState<string>('');

	useEffect(() => {
		setVisibleTodos(
			todos.filter((todo) => visibleTodos.some((task) => task.id === todo.id)),
		);
	}, [todos]);

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
		setVisibleTodos([...visibleTodos, newTask]);
		setInputValue('');
	};

	const handleCompletionStatusChange = (id: string): void => {
		const updatedTodos = todos.map((todo: ITodo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const deleteTodoById = (id: string): void => {
		setTodos(todos.filter((todo: ITodo) => todo.id !== id));
	};

	const filterCompletedTodos = () => {
		setVisibleTodos(todos.filter((todo: ITodo) => todo.completed === true));
	};

	const filterActiveTodos = () => {
		setVisibleTodos(todos.filter((todo: ITodo) => todo.completed === false));
	};

	const showAllTodos = () => {
		setVisibleTodos(todos);
	};

	const deleteAllCompletedTodos = (): void => {
		setTodos(todos.filter((todo: ITodo) => todo.completed === false));
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
				visibleTodos={visibleTodos}
				deleteTodoById={deleteTodoById}
				handleCompletionStatusChange={handleCompletionStatusChange}
				filterActiveTodos={filterActiveTodos}
				filterCompletedTodos={filterCompletedTodos}
				deleteAllCompletedTodos={deleteAllCompletedTodos}
				showAllTodos={showAllTodos}
			/>
		</>
	);
}

export default App;
