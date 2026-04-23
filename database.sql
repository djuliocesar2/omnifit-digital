-- 1. Usuário (Base para Aluno e Personal)
CREATE TABLE Usuario (
    id_usuario UUID PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('ALUNO', 'PERSONAL', 'ADMIN'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Aluno (Perfil detalhado)
CREATE TABLE Aluno (
    id_aluno UUID PRIMARY KEY,
    id_usuario UUID REFERENCES Usuario(id_usuario),
    objetivo VARCHAR(50),
    nivel_experiencia ENUM('INICIANTE', 'INTERMEDIARIO', 'AVANCADO'),
    id_plano_ativo INT REFERENCES Plano(id_plano)
);

-- 3. Personal (Profissional)
CREATE TABLE Personal (
    id_personal UUID PRIMARY KEY,
    id_usuario UUID REFERENCES Usuario(id_usuario),
    registro_profissional VARCHAR(20),
    especialidade VARCHAR(50)
);

-- 4. Plano (Configurações de Assinatura)
CREATE TABLE Plano (
    id_plano SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    valor DECIMAL(10,2),
    recursos JSONB -- Armazena benefícios: {"app": true, "24h": true, "coach": false}
);

-- 5. Treino (Prescrição)
CREATE TABLE Treino (
    id_treino UUID PRIMARY KEY,
    id_aluno UUID REFERENCES Aluno(id_aluno),
    id_personal UUID REFERENCES Personal(id_personal),
    data_prescricao DATE,
    exercicios JSONB -- Estrutura complexa: [{exercicio: "Supino", series: 4, reps: 10}]
);

-- 6. Pagamento (Histórico Financeiro)
CREATE TABLE Pagamento (
    id_pagamento UUID PRIMARY KEY,
    id_usuario UUID REFERENCES Usuario(id_usuario),
    valor DECIMAL(10,2),
    status ENUM('PENDENTE', 'APROVADO', 'ESTORNADO'),
    metodo ENUM('PIX', 'CARTAO', 'BOLETO'),
    data_pagamento TIMESTAMP
);

-- 7. Agendamento (Reserva de Consultoria/Aulas)
CREATE TABLE Agendamento (
    id_agendamento UUID PRIMARY KEY,
    id_aluno UUID REFERENCES Aluno(id_aluno),
    id_personal UUID REFERENCES Personal(id_personal),
    data_hora DATETIME,
    status ENUM('AGENDADO', 'CONCLUIDO', 'CANCELADO'),
    local_tipo ENum('PRESENCIAL', 'ONLINE')
);