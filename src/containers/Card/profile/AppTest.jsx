import React, { useState } from "react";
import { FormikForm } from "./FormikForm";
import "bootstrap/dist/css/bootstrap.min.css";





function AppTest() {


    const [fields, updateFields] = useState({
        imageProfile: "images/logoAmarela.png",
        select: "Pessoa Fisica",
        name: "Jessica",
        cpf: "999.999.999-99",
        birthDate: "21/07/1997",
        company: "SimpleCapp",
        cnpj: "99.999.999/9999-99",
        // phone: "+55 (048) 99999-9999",
        email: "admin@example.com",
        state: "Santa Catarina",
        cep: "99999-999",
        city: "Florianopolis",
        street: "Vidal Ramos",
        number: "999",
        district: "Centro"
    });
    // const [data, seData] = useState([])
  // useEffect(() => {
  //   axios.get(baseURL + '/users').then(response => setFields(response.data.data))
  //   axios.get(baseURL + '/users').then(response => seData(response.data))
  // }, [])



    return (
        <div >
            <FormikForm fields={fields} updateFields={updateFields}/>
        </div>
    );
}

export default AppTest;

// {fields.map((field) => ())}