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
    setDados(resposta.data);
}

//função para consultar com o token
export const buscar = async(url: string, setDados:Function, header:Object) => {
    const resposta = await api.get(url,header)
    setDados(resposta.data);
}

//Função para Cadastrar com Token 
export const cadastrar = async(url: string, dados: Object,setDados:Function, header : Object) => {
    const resposta = await api.post(url,dados,header)
    setDados(resposta.data);
}

//Função para atualizar token
export const atualizar = async(url: string, dados: Object,setDados:Function, header : Object) => {
    const resposta = await api.put(url,dados,header)
    setDados(resposta.data);
}

//Função para deletar token 
export const deletar = async(url: string,  header : Object) => {
   await api.delete(url,header);
}
