import axios from 'axios';

export const buscarDadosUsuario = async () => {
  const userId = localStorage.getItem('userId');

  if (userId) {
    try {
      const response = await axios.get(`http://localhost:8080/api/clientes/${userId}`);
      if (response.status === 200) {
        return response.data;
      } else {
        console.log('Falha ao buscar os dados do usuário.');
        return null;
      }
    } catch (error) {
      console.log('Ocorreu um erro ao buscar os dados do usuário:', error);
      return null;
    }
  } else {
    console.log('ID do usuário não encontrado no localStorage.');
    return null;
  }
};
