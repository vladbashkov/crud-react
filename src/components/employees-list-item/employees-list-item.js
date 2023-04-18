import './employees-list-item.css';

const EmployeesListItem = (props) => {

    // console.log(props);

    const {name, salary, onDelete, onToggleProps, onChangeSalary, increase, rise} = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if(increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span 
                className="list-group-item-label"
                data-toggle="rise"
                onClick={onToggleProps}
            >{name}</span>
            <input 
                type="text" 
                className="list-group-item-input"
                defaultValue={salary + '$'}
                onChange={(e) => onChangeSalary(name, parseInt(e.currentTarget.value))}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProps}
                    data-toggle="increase"
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;