export default function validateLogin(values) {
    let errors = {};

    if (!values.senha) {
        errors.senha = 'A senha é obrigatória.';
    }
    if (!values.email) {
        errors.email = 'O e-mail é obrigatório.';
    }
    return errors;
}