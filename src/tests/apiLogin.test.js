import handleChangeInput from '../components/login/InsertCode'
// import InsertCode from '../components/login/InsertCode'

const axios = require('axios')

//ERRADO, TEM QUE FAZER AINDA

jest.mock('axios')

describe('api login', () => {

    it('sucess', async () => {

        //arrange
        // const expectedData = { code: 12345 }
        const expectToken = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Implc3NpY2FAdGVzdGUuY29tIn0.KiDCZsgDPhUefQ-hEynnLKljH0DbAEqLIvwunHi-iIc' }
        const mockedResponse = { data: expectToken }
        axios.post.mockResolvedValue(mockedResponse)

        //act
        expect(await handleChangeInput({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Implc3NpY2FAdGVzdGUuY29tIn0.KiDCZsgDPhUefQ-hEynnLKljH0DbAEqLIvwunHi-iIc' })).toEqual(expectedData)
       

        //asserts
        expect(axios.post).toHaveBeenCalledWith('https://61b212bac8d4640017aaf19c.mockapi.io/api/v1/login')
    })

    // it('error', async () => {

    //     //arrange
    //     const response1 = { status: 400, message: 'error-message' }
    //     const response2 = { status: 401, message: 'Código inválido! Confira se o código digitado está correto ou clique em: ' }

    //     axios.post.mockImplementation(() => {
    //         throw new Error(response1);
    //     });

    //     axios.post.mockImplementation(() => {
    //         throw new Error(response2);
    //     });

    //     //act
    //     handleChangeInput({ code: 12345 })
    //     expect(await handleChangeInput({ status: 400, message: 'error-message' })).toEqual(response1)
    //     expect(await handleChangeInput({ status: 401, message: 'error-message' })).toEqual(response2)


    //     //asserts
    //     expect(response1.status).toBe(400);
    //     expect(response2.status).toBe(401);
    //     expect(axios.post).toHaveBeenCalledWith('https://61b212bac8d4640017aaf19c.mockapi.io/api/v1/login', response1)
    //     expect(axios.post).toHaveBeenCalledWith('https://61b212bac8d4640017aaf19c.mockapi.io/api/v1/login', response2)

    // })
})