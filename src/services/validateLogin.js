export default function validateLogin(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'O e-mail é obrigatório.';
    }
    return errors;
}