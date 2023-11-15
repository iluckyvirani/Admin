import express from 'express';
import Banner from '../model/BannerModel.js'; // Adjust the path based on your project structure

const router = express.Router();

// Create a new banner
export const banner= async (req, res) => {
  try {
    const { bannerImage, title, uriLink, bannerInfo } = req.body;
    
    // Validate request body here if needed

    const newBanner = new Banner({
      bannerImage,
      title,
      uriLink,
      bannerInfo,
    });

    const savedBanner = await newBanner.save();
    res.json(savedBanner);
  } catch (error) {
    console.error('Error creating banner:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllBanner = async (req, res) => {
  try {
      const banner = await Banner.find();
      res.json(banner);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update a banner by ID
export const updateBanner = async (req, res) => {
  try {
    const { bannerImage, title, uriLink, bannerInfo } = req.body;
    const { id } = req.params;

    // Validate request body and ID here if needed

    const updatedBanner = await Banner.findByIdAndUpdate(
      id,
      { bannerImage, title, uriLink, bannerInfo },
      { new: true }
    );

    if (!updatedBanner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    res.json(updatedBanner);
  } catch (error) {
    console.error('Error updating banner:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deletebanner = async (req, res)=>{
  const id = req.params.id 

  try {
      const banner = await Banner.findById(id)
      await banner.deleteOne()
      res.status(200).json("Banner Deleted!")
  } catch (error) {
      res.status(500).json(error)
  }
}

export default router;
