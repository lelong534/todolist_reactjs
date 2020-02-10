import React, {Component} from 'react';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
    
    render() {
        const {items, handleRemove, handleEdit} = this.props;
        return(
            <div>
                <h1>Danh sách ghi chú</h1>
                {items.map(item => {
                    return (
                        <TodoItem 
                            key={item.id}
                            title={item.title}
                            handleRemove={()=>handleRemove(item.id)}
                            handleEdit={()=>handleEdit(item.id)}
                        />
                )})}
            </div>
        )
    }
}