// const axios = require('axios');
// const { expect } =require('chai');

// I used above two line but it throwed error then i add 'type' : 'module' in package.json
// then used below two line.

import axios from 'axios';
import { expect } from 'chai'
import { faker } from '@faker-js/faker';


describe('Post Api Request Tests', async()=>{
    it('should be able to post user details', async()=>{
        const res = await axios.post('https://reqres.in/api/users',{
            "name": "morpheus",
            "job": "leader"
        });
        console.log('Posted Data : ', res.data);
        expect(res.data.name).equal("morpheus");
        expect(res.data.job).equal("leader")
    })
    
    it('should be able to post user details using faker library', async()=>{
        const randomName = faker.person.firstName();
        const randomjobTitle = faker.person.jobTitle();
        const res = await axios.post('https://reqres.in/api/users',{
            "name": randomName,
            "job": randomjobTitle
        });
        console.log('Posted Data : ', res.data);
        expect(res.data.name).equal(randomName);
        expect(res.data.job).equal(randomjobTitle)
    })
})