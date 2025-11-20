import { users } from "../data/users.js";

export const UserController = {
  getAll(req, res) {
    res.json(users);
  },

  getOne(req, res) {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  },

  create(req, res) {
    const { name, age } = req.body;

    if (!name || !age) {
      throw new Error("Name va age majburiy!");
    }

    const newUser = {
      id: Date.now(),
      name,
      age
    };

    users.push(newUser);

    res.status(201).json({
      message: "User created",
      data: newUser
    });
  },

  update(req, res) {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { name, age } = req.body;

    user.name = name ?? user.name;
    user.age = age ?? user.age;

    res.json({
      message: "User updated",
      data: user
    });
  },

  delete(req, res) {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    res.json({ message: "User deleted" });
  }
};
