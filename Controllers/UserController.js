import UserProfile from "../model/UserModel.js";

export const register = async (req, res) => {
    try {
        const newUserProfile = await UserProfile.create(req.body);
        res.json(newUserProfile);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await UserProfile.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateUser = async (req, res) => {
    try {
      const { username, email, phone, totalConsultants } = req.body;
      const { id } = req.params;
  
      // Validate request body and ID here if needed
  
      const updatedUser = await UserProfile.findByIdAndUpdate(
        id,
        { username, email, phone, totalConsultants },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'Banner not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating banner:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  export const deleteUser = async (req, res)=>{
    const id = req.params.id 
  
    try {
        const user = await UserProfile.findById(id)
        await user.deleteOne()
        res.status(200).json("User Deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
  }
