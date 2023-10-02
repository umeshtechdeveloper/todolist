/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useRef, useEffect } from 'react';

import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

import { Todo } from '../model';
import './styles.css';

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todoItem) => {
        return todoItem.id === todo.id
          ? { ...todoItem, isDone: !todoItem.isDone }
          : todoItem;
      });
    });
  };

  const handleDelete = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todoItem) => {
        return todoItem.id !== todo.id;
      });
    });
  };

  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(true);
      inputRef.current?.focus();
    } else {
      setEdit(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEdit(false);

    if (editTodo) {
      setTodos((prevTodos) => {
        return prevTodos.map((todoItem) => {
          return todoItem.id === todo.id
            ? { ...todoItem, todo: editTodo }
            : todoItem;
        });
      });
    }
  };

  return (
    <form className="todos_single" onSubmit={(e) => handleSubmit(e)}>
      {edit && (
        <input
          type="input"
          className="todos_single--text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      )}

      {todo.isDone ? (
        <s className="todos_single--text">{edit ? '' : todo.todo}</s>
      ) : (
        <span className="todos_single--text">{edit ? '' : todo.todo}</span>
      )}

      <div>
        <span className="icon" onClick={handleEdit}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={handleDelete}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={handleDone}>
          {todo.isDone ? <RxCross2 /> : <MdDone />}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
