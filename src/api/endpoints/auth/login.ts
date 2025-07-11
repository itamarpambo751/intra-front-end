import axios from 'axios';
import { URLAPI } from '../index';


interface Aluno {
    email: string;
    password: string;
}

export async function login(data: Aluno) {

    try {
        const response = await axios.post(`${URLAPI}auth/login`, data);

        if (!response.data) {
            throw new Error('Nenhum aluno encontrado');
        }
        
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
}