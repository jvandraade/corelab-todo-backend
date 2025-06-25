import { Request, Response } from 'express';

let todos: any[] = [];

export const getAllTodos = (req: Request, res: Response) => {
  res.json(todos);
};

export const createTodo = (req: Request, res: Response) => {
  const newTodo = { id: Date.now(), ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = todos.findIndex(todo => todo.id == id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  todos[index] = { ...todos[index], ...req.body };
  res.json(todos[index]);
};

export const deleteTodo = (req: Request, res: Response) => {
  todos = todos.filter(todo => todo.id != req.params.id);
  res.status(204).send();
};
