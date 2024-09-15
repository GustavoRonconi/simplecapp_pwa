
const validate = (values, props) => {


    // if (Object.keys(values).length === 1) {
    //     return {}
    // }

    //    if (values.length === "undefined") {
    //        return {}
    //    } 

 

    const errors = {}


    if (!values.select) {
        errors.select = 'Selecione uma das opções';
    }



    // if (!values.name) {
    //     errors.name = 'O nome é obrigatório';
    // }
    // if (!values.cpf) {
    //     errors.cpf = 'O CPF é obrigatório';
    // } else 

    if (values.cpf.length < 14) {
        errors.cpf = 'CPF inválido.';
    }
    // if (!values.birthDate) {
    //     errors.birthDate = 'A data de nascimento é obrigatório';
    // }
    // if (!values.company) {
    //     errors.company = 'A razão social é obrigatório';
    // }
    // if (!values.cnpj) {
    //     errors.cnpj = 'O CNPJ é obrigatório';
    // } else 

    if (values.cnpj.length < 18) {
        errors.cnpj = 'CNPJ inválido.';
    }
    // if (!values.phone) {
    //     errors.phone = 'O telefone é obrigatório';
    // } else 
    if (values.phone.length < 18) {
        errors.phone = 'Telefone inválido.';
    }
    if (!values.email) {
        errors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Endereço de e-mail inválido.';
    }
    // if (!values.state) {
    //     errors.state = 'O estado é obrigatório';
    // }
    // if (!values.cep) {
    //     errors.cep = 'O CEP é obrigatório';
    // } else 
    if (values.cep.length < 9) {
        errors.cep = 'CEP inválido.';
    }
    // if (!values.city) {
    //     errors.city = 'A cidade é obrigatório';
    // }
    // if (!values.street) {
    //     errors.street = 'A rua é obrigatório';
    // }
    // if (!values.number) {
    //     errors.number = 'O número é obrigatório';
    // }
    // if (!values.district) {
    //     errors.district = 'O bairro é obrigatório';
    // }


    return errors
};

export default validate;