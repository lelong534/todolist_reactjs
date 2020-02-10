import React, {Component} from 'react';

export default class TodoInput extends Component {
    
    render() {
        const {item, editItem,  handleChange, handleSubmit} = this.props;
        return(
            <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={item}
                    onChange={handleChange}
                >
                </input>
                <button 
                    className="btn-primary" 
                    type="submit"
                >
                {editItem ? "Sửa ghi chú" : "Thêm ghi chú"}
                </button>
            </form>
            </div>
        )
    }
}