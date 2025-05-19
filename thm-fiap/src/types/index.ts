export interface AlertaEnchente {
    nivel: 'baixo' | 'medio' | 'alto';
    localizacao: string;
    dataHora: string;
    descricao: string;
}

export interface DadosPluviometricos {
    data: string;
    volumeChuva: number;
    localizacao: string;
}

export interface PontoAlagamento {
    id: string;
    latitude: number;
    longitude: number;
    endereco: string;
    nivelRisco: 'baixo' | 'medio' | 'alto';
    ultimaAtualizacao: string;
} 

export interface DadosApi {
    dtInicio: string;
    dtFim: string;
    latitude: number;
    longitude: number;
}
