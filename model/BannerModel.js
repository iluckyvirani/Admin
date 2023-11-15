import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
  bannerImage: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  uriLink: {
    type: String,
    required: true,
  },
  bannerInfo: {
    type: String,
    required: true,
  },
});

const Banner = mongoose.model('Banner', bannerSchema);

export default Banner;

