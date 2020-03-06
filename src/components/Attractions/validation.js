import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Nome da atração requirido'),
  attraction: yup.string().required('Nome da atração requirido'),
  date: yup.date().required('Data de estreia requirido'),
});

export default schema;
