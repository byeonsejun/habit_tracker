import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset(); // 정석임..
        // this.inputRef.current.value = '';
        // 리엑트에선 DOM으로 접근하지 않고 리엑트만의 언어인 Ref로 접근함 
    };

        return (
            <form ref={formRef} className='add-form' onSubmit={onSubmit}>
                <input
                    ref={inputRef}
                    type="text" 
                    className='add-input' 
                    placeholder='Habit' 
                />
                <button className='add-button'>Add</button>
            </form>
        );
    });

export default HabitAddForm;
