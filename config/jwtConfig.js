import {createHmac} from 'node:crypto'
import config from "./config.js";

const hash = createHmac('sha256', config.secretKey)
    .update('I love cupcakes')
    .digest('hex');
console.log(hash);

export default hash;