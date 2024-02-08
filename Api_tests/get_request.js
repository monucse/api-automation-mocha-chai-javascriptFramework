// const axios = require('axios');
// const { expect } =require('chai');

// I used above two line but it throwed error then i add 'type' : 'module' in package.json
// then used below two line.

import axios from 'axios';
import { expect } from 'chai'


describe('GET Api Request Tests', async()=>{
    it('should be able to get user list', async()=>{
        const res = await axios.get('https://reqres.in/api/users?page=2');
        console.log('Fetched Data : ', res.data);
        expect(res.data.page).equal(2);
        expect(res.data.per_page).equal(6)
    })
})