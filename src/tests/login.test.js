import Login from '../components/login/Login'
import { render, screen, fireEvent } from '@testing-library/react';



describe('login', () => {
  it('mostrar textos no login', () => {
    render(<Login />);
    expect(screen.getByText('Digite seu e-mail e receba um código de acesso.')).toBeInTheDocument()
    // expect(screen.getByText('Olá, bem-vindo(a) a plataforma SimpleCapp &#x1F4B0;')).toBeInTheDocument()
  })
  test('mostrar botão login', () => {
    render(<Login />)
    const buttonLogin = screen.getByRole('button');

    fireEvent.change(buttonLogin)
    expect(buttonLogin).toBeInTheDocument();
  })

})










// describe('login', () => {


//     // test('mostrar form login', () => {
//     //     render(<Login />)
//     //     const inputLogin = screen.getByRole('textbox', {name: /email/i});

//     //     fireEvent.change(inputLogin, {target: {value: ''}})
//     //     expect(inputLogin).toBeInTheDocument();
//     //   })
//       test('mostrar textos', () => {
//         render(<Login />)
//         const textLogin = screen.getByRole('textbox');
//         expect(textLogin).toBeInTheDocument();
//       })
//       test('mostrar botão login', () => {
//         render(<Login />)
//         const buttonLogin = screen.getByRole('button');

//         fireEvent.change(buttonLogin)
//         expect(buttonLogin).toBeInTheDocument();
//       })

//     });




// describe('login', () => { 
//   it("mostrar input e form", () => {
//     render(<Login />);

//     const input = screen.getByTestId("campo");
//     const form = screen.getByTestId("form");

//     userEvent.type(input, "jessica@teste.com");
//     fireEvent.submit(form);

//     expect(input).toBeInTheDocument();
//     expect(form).toBeInTheDocument();
//     expect(screen.getByTestId("campo")).toBeTruthy();
//     expect(screen.getByTestId("form")).toBeTruthy();
//   });
// });

