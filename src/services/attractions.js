import DB from './db';

// const dados = {
//     name: 'Jovens Titans',
//     exhibition: '11/11/18'
// }

export const GET_ATTRACTION = () =>  DB.attractions.toArray();
export const SAVE_ATTRACTION = ({ name, exhibition }) => {
    DB.attractions.put({ name, exhibition });
}
export const UPDATED_ATTRACTION = ({ id, name, exhibition }) => {
    DB.attractions.update({ id, name, exhibition });
}
export const DELETE_ATTRACTION = (pk) => {
    DB.attractions.delete(pk);
}

export const Test = ({ msg }) => {
    console.log(msg);
}

// DELETE_ATTRACTION(4);
// SAVE_ATTRACTION(dados);
