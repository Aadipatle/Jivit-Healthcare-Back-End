import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()
const dbUrl = process.env.DATABASE_URL;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const addHospital = new mongoose.Schema({
    hospitalName: String,
    doctorName: String,
    speciality: String,
    mobileNo: String,
    address: String,
    pincode: String,
    district: String,
    tehsil: String,
    country: String,
    phoneNo: String,
    emailId: String,
    accountName: String,
    accountNo: String,
    bankName: String,
    ifscCode: String,
    branch: String,
    remark: String
    
});

const Hospital = mongoose.model('hospital', addHospital);



export const allhospital = async (req, res) => {
    try {
        const hospital = await Hospital.find();
        res.json(hospital);
       
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }

}

export const addhospital = async (req, res) => {
    let hospital = req.body
    try {
        let newhospital = await Hospital(hospital)
        newhospital.save()
        res.json({ message: 'Form data saved successfully', data: hospital });
        console.log(hospital)
    } catch (error) {
        res.status(500).json({ message: 'Error saving form data', error: error.message });
    }
}