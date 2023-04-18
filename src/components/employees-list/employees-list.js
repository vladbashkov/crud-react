import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onDelete, onToggleProps, onChangeSalary}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeSalary={onChangeSalary}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList; 