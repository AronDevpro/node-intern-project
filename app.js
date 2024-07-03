import express from "express";
import mongoose from "mongoose";
import cors from "cors"

import inventoryRoutes from "./routes/inventoryRoutes.js";
import configure from "./config/config.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(cors())

// Middleware
app.use(express.json());


// Routes
app.use('/api/inventories', inventoryRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);


// Connect to MongoDB
mongoose.connect(configure.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Start the server
const PORT = configure.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
