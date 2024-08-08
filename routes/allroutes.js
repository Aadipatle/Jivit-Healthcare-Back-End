import express from 'express';
import { allcustomers,addcustomer } from "../controller/controllers.js";
import {allhospital,addhospital} from '../controller/hospital.js'

const route = express.Router()

route.get('/allcustomers' , allcustomers)
route.get('/allhospital' , allhospital)
route.post('/addcustomer' , addcustomer)
route.post('/addhospital' , addhospital)



export default route;