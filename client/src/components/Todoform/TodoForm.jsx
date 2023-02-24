import React from 'react'
import '../../App.css'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addNewTodo } from '../../redux/actions'
const TodoForm = () => {
  const [text,settext] = useState("")

  const dispatch = useDispatch()

  const onFormSubmit = (e) =>{
    e.preventDefault();

    dispatch(addNewTodo(text))

   settext('')
  }

  const onInputChange = (e)=>{
    settext(e.target.value)
  }
  return (
    <div className='Form' onSubmit={onFormSubmit}>
        <form>
            <input type='text' required
            placeholder='Write the task'
            autoComplete='false'
            onChange={onInputChange}
            value={text}></input>
        </form>
      
    </div>
  )
}

export default TodoForm
