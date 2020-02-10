import React, {Component} from 'react';

export default class TodoItem extends Component {
    render() {
        const {title, handleRemove, handleEdit} = this.props;
        return(
            
            <div className="row p-4">
                <p>{title}</p>
                
                <button onClick={handleEdit}>Sửa</button>
                <button onClick={handleRemove}>Xóa</button>
            </div>
        )
    }
}