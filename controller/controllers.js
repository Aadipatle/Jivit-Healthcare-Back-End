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

const userSchema = new mongoose.Schema({
    fullname: String,
    middlename: String,
    address: String,
    phoneNumber: String,
    dateOfJoining: Date,
    dateOfRetirement: Date,
    dateOfBirth: Date,
    aadharPanNo: String,
    departmentName: String,
    departmentLocation: String,
    designation: String,
});


const User = mongoose.model('User', userSchema);



export const allcustomers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }

}

export const addcustomer = async (req, res) => {
    let customer = req.body
    try {
        let newcustomer = await User(customer)
        newcustomer.save()
        res.json({ message: 'Form data saved successfully', data: customer });
    } catch (error) {
        res.status(500).json({ message: 'Error saving form data', error: error.message });
    }
}

