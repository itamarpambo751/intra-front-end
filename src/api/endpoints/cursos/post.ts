import axios from 'axios';
import { URLAPI, tokenHeaders } from '../index';
import { validateCursoData } from './validate';

interface DTOCurso {
    nome: string;
}

export async function postCurso(cursoData: DTOCurso) {
    const responseValidateCurso = await validateCursoData(cursoData);

    if (!responseValidateCurso)
        return;

    const data = tokenHeaders();

    const { token } = data;


    try {
        const response = await axios.post(
            `${URLAPI}cursos`,
            cursoData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao registrar curso:', error);
        throw error;
    }
}