import * as yup from 'yup';

export const contactMeScheme = yup.object({
    email: yup.string()
        .email('Email must be a valid')
        .required('Required email'),
    name: yup.string()
        .min(1, 'Name must contain at least 1 characters')
        .required('Required name'),
    message: yup.string()
        .min(1, 'Message must contain at least 1 characters')
        .required('Required message'),
});