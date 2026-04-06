//Dentro da service é onde estão todas as funções que irão realizar as chamadas 
//para o backend 

import axios from "axios";

//Cria uma nova instância do Axios
const api = axios.create({
    baseURL: 'https://blogpessoal-1-o6lk.onrender.com/'
})

//Função para criar Usuário
export const cadastrarUsuario = async(url: string, dados: Object, setDados:Function) => {
    const resposta = await api.post(url,dados)
    setDados(resposta);
}

//função para authenticar Usuário
export const login = async(url: string, dados: Object, setDados:Function) => {
    const resposta = await api.post(url,dados)
    setDados(resposta);
}

