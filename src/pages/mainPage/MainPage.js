import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNameAction, createUserAction } from '../../action/action';

function MainPage() {

    const dispatch = useDispatch();
    const name = useSelector(satte => satte.users.name)
    const users = useSelector(state => state.users.users)
    const createUser = () => {
        dispatch(createUserAction(name))
    }

    const changeInput = (e) => {
        dispatch(addNameAction(e.target.value))
    }

  return (
    <div>Main Page
        <div>
        <input type="text" onChange={changeInput} value={name}/>
        <button onClick={createUser}>create user</button>
        </div>

        <ul>
            <li>users:</li>
            {users.map((user, key)=> <li key={key}>{user}</li>)}
        </ul>
     
    </div>

   
  )
}

export default MainPage