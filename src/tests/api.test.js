// import api from './src/services/axiosConfig';
import sendRegister from '../services/apiServices'

import api from '../services/apiServices'


// mock response api axios



jest.mock('../services/apiServices');

describe('test send email', () => {
    test('sucess 200', async () => {
        const request = { email: 'jessica@teste.com' };
        const response = { data: request }
        api.post = jest.fn().mockResolvedValue(response);


        // api.post = jest.fn().mockImplementation(() => Promise.resolve(resp))
        // return sendRegister.all().then(data => expect(data).toEqual(email));

        const data = await sendRegister(response);
        expect(data).toEqual('jessica@teste.com');

    });
});




//exemplo2


// const sendRegister = require('services/apiServices');
// const api = require('../services/apiServices');

// jest.mock('../services/apiServices');
// const mockApi = api



// jest.mock('axios', () => {
//     return {
//         create: () => {
//             return {
//                 get: jest.fn()
//             }
//         }
//     };
// });

// describe.only(
//     'Test API services', () => {
//         describe('sendRegister', () => {
//             it("202 case", async () => {
//                 const result = {
//                     status: 200,
//                     data: {
//                         "email": "jessica@teste.com"
//                     }
//                 };

//                 api.post.mockReturnValueOnce({
//                     data: { 'email': 'jessica@teste.com' }
//                 })
//                 const email = await sendRegister();
//                 expect(email).toEqual('jessica@teste.com');
//             })
//         })
//     }
// )


//exemplo 3


// describe('api', () => {
//     it('chamada função', done => {
//         var mock = new MockAdapter(api);
//         const data = { response: true };
//         mock.onPost('https://2fb6b79e-8033-4384-b541-ade9fadafa59.mock.pstmn.io/login').reply(200, data);

//         sendRegister.sendMessage(0, 'any').then(response => {
//             expect(response).toEqual(data);
//             done();

//         });
//     });
// });
