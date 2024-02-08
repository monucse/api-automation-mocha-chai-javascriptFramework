// const axios = require('axios');
// const { expect } =require('chai');

// I used above two line but it throwed error then i add 'type' : 'module' in package.json
// then used below two line.


/*
import axios from 'axios';
import { expect } from 'chai';
import { faker } from '@faker-js/faker';
import {fs} from 'fs';
import {postResData} from '../response_data/post_response_data.json'


describe.only('Post Api Request Tests and write post response into json file', async()=>{
    it('should be able to post user details using faker library', async()=>{
        const randomName = faker.person.firstName();
        const randomjobTitle = faker.person.jobTitle();
        const res = await axios.post('https://reqres.in/api/users',{
            "name": randomName,
            "job": randomjobTitle
        });
        console.log('Posted Data : ', res.data);
        expect(res.data.name).equal(randomName);
        expect(res.data.job).equal(randomjobTitle);

        postResData.job = res.data.job;
        postResData.name = res.data.name;
        postResData.id = res.data.id;
        postResData.createdAt = res.data.createdAt;

        fs.writeFileSync('../response_data/post_response_data.json',JSON.stringify(postResData))
    })
})
*/