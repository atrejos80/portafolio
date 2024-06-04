import * as yup from 'yup';


export function basicSchema() {
    const onlyDigit = /^\d+$/;
    const actualUrl = window.location.pathname;
    console.log(actualUrl)    

    const en = yup.object().shape({
        name: yup.string().required("*Required"),
        number: yup.string().matches(onlyDigit, { message: '*Only digits' }).required('*Required'),
        email: yup.string().email("*Please enter a valid email").required("*Required"),
        message: yup.string().required("*Required")

    })

    const es = yup.object().shape({
        name: yup.string().required("*Requerido"),
        number: yup.string().matches(onlyDigit, { message: '*Only digits' }).required('*Requerido'),
        email: yup.string().email("*Please enter a valid email").required("*Requerido"),
        message: yup.string().required("*Requerido")

    })

    if(actualUrl == '/'){
        return ( es )
    }else{
        return ( en )
    }

}