import { FilterType } from '../../enums';

interface ButtonsProps {
	filterType: FilterType;
	showTodos: (filter: FilterType) => void;
}

export const Buttons = ({ filterType, showTodos }: ButtonsProps) => {
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
						console.log('keyType', keyType);
						showTodos(keyType);
					}}
				>
					{titleForButton(keyType)}
				</button>
			);
		}
	});

	return <div className="buttons">{buttons}</div>;
};
