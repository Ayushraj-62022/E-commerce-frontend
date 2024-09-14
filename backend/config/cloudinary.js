import {v2 as cloudinary} from 'cloudinary';

const connectCloudinary =async () => {
    cloudinary.config({ 
        cloud_name: 'dhzvzm5fm', 
        api_key: '988397352349936', 
        api_secret: 'h5PRQQ6DMawMD9ZVAfoocMCyANs' 
      });
}

export default connectCloudinary
          
