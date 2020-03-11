import React, {useContext} from 'react'
import {Context} from "./context";

const TodoItem = ({title, id, completed}) => {

  // const [checked, setChecked] = useState(completed);
  const cls = ['todo'];
  const {dispatch} = useContext(Context);

  if(completed){
    cls.push('completed')
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({type: "toggle", payload: id})}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() => dispatch({type: 'remove', payload: id})}
        >
          delete
        </i>
      </label>
    </li>
  )
}

export default TodoItem;