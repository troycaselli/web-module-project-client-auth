import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Friend name required'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Friend email required'),
})

export default formSchema;