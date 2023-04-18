import './app-info.css';

const AppInfo = ({listLength, increaseListLength}) => {

    return (
        <div className="app-info">
            <h1>Перелік співробітників компанії</h1>
            <h2>Загальна кількість співробітників: {listLength}</h2>
            <h2>Премію отримають: {increaseListLength}</h2>
        </div>
    );
    
}

export default AppInfo;