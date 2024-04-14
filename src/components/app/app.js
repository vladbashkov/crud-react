import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'Влад Башков',
                    salary: 1000,
                    increase: true,
                    rise: false,
                    id: 1
                },
                {
                    name: 'Карина Шевченко',
                    salary: 1000,
                    increase: true,
                    rise: true,
                    id: 2
                },
                {
                    name: 'Олександр Перемолов',
                    salary: 500,
                    increase: false,
                    rise: false,
                    id: 3
                },
                {
                    name: 'Віталій Горіхов',
                    salary: 750,
                    increase: false,
                    rise: true,
                    id: 4
                },
                {
                    name: 'Світлана Корольова',
                    salary: 800,
                    increase: false,
                    rise: false,
                    id: 5
                },
                {
                    name: 'Олена Приймаченко',
                    salary: 500,
                    increase: false,
                    rise: false,
                    id: 6
                }
            ],
            term: '',
            filter: 'all'
        };
        this.maxID = 7;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {

            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxID++
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProps = (id, props) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [props]: !item[props]}
                }
                return item;
            })
        }))
    }

    onChangeSalary = (name, newSalary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.name === name && newSalary > 0) {
                    return {...item, salary: newSalary}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(!term.length) return items;

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'moreThen1000': 
                return items.filter(item => item.salary >= 1000);
            default: 
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const listLength = this.state.data.length;
        const increaseListLength = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                    listLength={listLength}
                    increaseListLength={increaseListLength}
                />
    
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProps={this.onToggleProps}
                    onChangeSalary={this.onChangeSalary}
                />
    
                <EmployeesAddForm 
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;