// const axios = require('axios');
// const { expect } =require('chai');

// I used above two line but it throwed error then i add 'type' : 'module' in package.json
// then used below two line.

import axios from 'axios';
import { expect } from 'chai'

describe('Delete Api Request Tests', async()=>{
    it('should be able to delete user details', async()=>{
        const res = await axios.delete('https://reqres.in/api/users/2');
        console.log(' Deleted Data : ', res.data);
        expect(res.status).equal(204);
    })
})