import sendRegister from '../services/apiServices'

const axios = require('axios')
window.alert = jest.fn();

jest.mock('axios')

describe("send register", () => {

    it("sucess", async () => {

        //arrange
        const expectedData = { email: 'jessica@teste.com' }
        const mockedResponse = { data: expectedData }
        axios.post.mockResolvedValue(mockedResponse)

        //act
        expect(await sendRegister({ email: 'jessica@teste.com' })).toEqual(expectedData)

        //asserts
        expect(axios.post).toHaveBeenCalledWith('https://61b212bac8d4640017aaf19c.mockapi.io/api/v1/register', expectedData)
    })
    it("error", async () => {

        //arrange
        axios.post.mockImplementation(() => {
            throw new Error("xablau");
        });

        //act
        sendRegister({ email: 'jessica@teste.com' })

        //asserts
        expect(window.alert).toHaveBeenCalledWith('xablau')
    })


})