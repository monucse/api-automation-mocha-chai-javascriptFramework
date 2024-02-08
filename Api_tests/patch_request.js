// const axios = require('axios');
// const { expect } =require('chai');

// I used above two line but it throwed error then i add 'type' : 'module' in package.json
// then used below two line.

import axios from 'axios';
import { expect } from 'chai'
import { faker } from '@faker-js/faker';


describe('Patch Api Request Tests', async()=>{
    it('should be able to update user details using patch method and faker library', async()=>{
        const randomName = faker.person.firstName();
        const randomjobTitle = faker.person.jobTitle();
        const res = await axios.patch('https://reqres.in/api/users/2',{
            "name": randomName
        });
        console.log('Updated Data : ', res.data);
        expect(res.data.name).equal(randomName);
    })
})