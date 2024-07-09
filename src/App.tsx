import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Form, TodosList } from './components';
import { ITodo } from './interfaces.ts';
import { v4 as uuidv4 } from 'uuid';
import { FilterType } from './enums.ts';

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
	]);
	const [visibleTodos, setVisibleTodos] = useState<ITodo[]>([...todos]);
	const [inputValue, setInputValue] = useState<string>('');

	const [filterType, setFilterType] = useState<FilterType>(FilterType.All);

	useEffect(() => {
		setVisibleTodos(
			todos.filter((todo) => {
				switch (filterType) {
					case FilterType.All:
						return true;
					case FilterType.Completed:
						return todo.completed;
					case FilterType.Active:
						return !todo.completed;
				}
			}),
		);
	}, [todos, filterType]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setInputValue(e.target.value);
	};

	const addTask = (): void => {
		const newTask = {
			id: uuidv4(),
			title: inputValue,
			completed: false,
		};
		setTodos((prevTodos) => [...prevTodos, newTask]);
		setInputValue('');
	};

	const handleCompletionStatusChange = (id: string): void => {
		const updatedTodos = todos.map((todo: ITodo) => {
			return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
		});
		setTodos(updatedTodos);
	};

	const showTodos = (filter: FilterType) => {
		setFilterType(filter);
	};

	const deleteTodoById = (id: string): void => {
		setTodos(todos.filter((todo: ITodo) => todo.id !== id));
	};
	const deleteAllCompletedTodos = (): void => {
		setTodos(todos.filter((todo: ITodo) => todo.completed === false));
	};

	return (
		<div>
			<h1>Todos</h1>
			<div className="form_container">
				<Form
					inputValue={inputValue}
					setInputValue={handleInputChange}
					addTask={addTask}
				/>
			</div>
			<div className="todos_container">
				<TodosList
					filterType={filterType}
					todos={todos}
					visibleTodos={visibleTodos}
					deleteTodoById={deleteTodoById}
					handleCompletionStatusChange={handleCompletionStatusChange}
					showTodos={showTodos}
					deleteAllCompletedTodos={deleteAllCompletedTodos}
				/>
			</div>
		</div>
	);
}

export default App;
