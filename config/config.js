import {config} from "dotenv";

config();

const configure = {
    port: process.env.PORT || 3000,
    dbURI: process.env.DB_URI,
    secretKey: process.env.SECRET_KEY
};

export default configure;