import api from '../services/apiConfig'
import { render, screen, fireEvent } from '@testing-library/react';
import Insertcode from '../components/login/InsertCode'
import Login from '../components/login/Login'
import sendRegister from '../services/apiServices'
import MockAdapter from 'axios-mock-adapter';

// mock response api axios

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




jest.mock('api');

describe('api', () => {
    test('should fetch users', () => {
        const email = [{ email: 'jessica@teste.com' }];
        const resp = { data: email };
        api.post.mockResolvedValue(resp);

        return sendRegister().then(data => expect(data).toEqual(email));


    });
});