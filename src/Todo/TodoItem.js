import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context.js'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: '10px',
        borderWidth: '1 px',
        borderRadius: '50px',
        marginBottom: '10px',
        borderStyle: 'solid'    
    },
    input: {
        marginRight: '10px'
    }
}

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }

    return(
        <li style={styles.li}>
        <span className={classes.join(' ')}>
          <input
            type='checkbox'
            checked={todo.completed}
            style={styles.input}
            onChange={() => onChange(todo.id)}
          />
          <strong>{index + 1}</strong>
          &nbsp;
          {todo.title}
      </span>
        <button className='rm' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem