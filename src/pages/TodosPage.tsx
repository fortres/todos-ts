import React, { useState, useEffect} from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import {ITodo} from '../interfaces';

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem('todos') || '[]'
    ) as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo = {
      title,
      id: Date.now(),
      completed: false
    };

    setTodos(prevState => [newTodo, ...prevState])
  };

  const toggleHandler = (id: number) => {
    setTodos(prevState => prevState.map(todo => {
      if (id === todo.id) todo.completed = !todo.completed;

      return todo;
    }))
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Действительно удалить?');
    if (shouldRemove) {
      setTodos(prevState => prevState.filter(todo => id !== todo.id))
    }
  };

  return (
    <div className="container">
      <TodoForm onAdd={addHandler}/>
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </div>
  )
};