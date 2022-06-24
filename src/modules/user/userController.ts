import { randomUUID } from "crypto";
import { Request, Response } from "express";
interface IUserProps {
  id: string;
  name: string;
  email: string;
}
const userMemory: IUserProps[] = [];

export const userIndex = async (req: Request, res: Response) => {
  res.json(userMemory);
};

export const userCreate = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const id = randomUUID();
  const user: IUserProps = {
    id,
    name,
    email,
  };
  userMemory.push(user);
  res.json(user);
};

export const userShow = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  const user = userMemory.find(user => user.id === user_id);
  res.json(user);
};
