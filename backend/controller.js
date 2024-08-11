import Report from "./dataModel.js";
``
export const getUsers = async (req, res) => {
  try {
    const users = await Report.find();
    res.json(users);
  } catch (error) {
    res.status(201).json({ message: error.message });
  }
};

export const registerUser = async (req, res) => {
  const user = new Report(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
