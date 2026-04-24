-- OMNIFIT DIGITAL - Schema do Banco de Dados
-- Foco: Integridade, Autonomia e Escalabilidade

-- 1. Usuário (Adicionado campo NOME para saudação no Dashboard)
CREATE TABLE Usuario (
    id_usuario UUID PRIMARY KEY,
    nome VARCHAR(100) NOT NULL, -- Necessário para o "Olá, Julio"
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('ALUNO', 'PERSONAL', 'ADMIN') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Aluno (Perfil detalhado e métricas de progresso)
-- Resolve a falta de clareza sobre o perfil do usuário
CREATE TABLE Aluno (
    id_aluno UUID PRIMARY KEY,
    id_usuario UUID REFERENCES Usuario(id_usuario) NOT NULL,
    objetivo VARCHAR(50) NOT NULL,
    nivel_experiencia ENUM('INICIANTE', 'INTERMEDIARIO', 'AVANCADO') NOT NULL,
    data_nascimento DATE,
    peso_inicial DECIMAL(5,2),
    altura_inicial DECIMAL(3,2),
    id_plano_ativo INT REFERENCES Plano(id_plano),
    CONSTRAINT fk_usuario_aluno FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);

-- 3. Personal (Cadastro de Profissionais)
-- Entidade para gestão técnica e prescrição de treinos
CREATE TABLE Personal (
    id_personal UUID PRIMARY KEY,
    id_usuario UUID REFERENCES Usuario(id_usuario) NOT NULL,
    registro_profissional VARCHAR(20) UNIQUE NOT NULL,
    especialidade VARCHAR(50),
    bio TEXT,
    CONSTRAINT fk_usuario_personal FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);

-- 4. Plano (Configurações de Assinatura e Recursos)
-- Resolve a redundância cognitiva ao centralizar os benefícios por plano
CREATE TABLE Plano (
    id_plano SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    recursos JSONB NOT NULL -- Ex: {"app": true, "24h": true, "acesso_unidades": ["Ipiranga"]}
);

-- 5. Treino (Prescrição e Execução)
-- Estrutura complexa para suportar a autonomia do aluno (Focus Mode)
CREATE TABLE Treino (
    id_treino UUID PRIMARY KEY,
    id_aluno UUID REFERENCES Aluno(id_aluno) NOT NULL,
    id_personal UUID REFERENCES Personal(id_personal), -- Pode ser NULL para treinos genéricos automáticos
    data_prescricao DATE NOT NULL,
    status_treino ENUM('ATIVO', 'ARQUIVADO') DEFAULT 'ATIVO',
    exercicios JSONB NOT NULL -- Ex: [{"nome": "Supino", "series": 4, "reps": 10, "carga": "50kg"}]
);

-- 6. Pagamento (Ajustado para vincular a liberação do plano)
CREATE TABLE Pagamento (
    id_pagamento UUID PRIMARY KEY,
    id_usuario UUID REFERENCES Usuario(id_usuario) NOT NULL,
    id_plano INT REFERENCES Plano(id_plano) NOT NULL, -- Vincula qual plano foi comprado
    valor DECIMAL(10,2) NOT NULL,
    status ENUM('PENDENTE', 'APROVADO', 'ESTORNADO') DEFAULT 'PENDENTE',
    metodo ENUM('PIX', 'CARTAO', 'BOLETO') NOT NULL,
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Agendamento (Gestão de Consultorias e Aulas)
-- Organiza a jornada híbrida (Presencial/Online)
CREATE TABLE Agendamento (
    id_agendamento UUID PRIMARY KEY,
    id_aluno UUID REFERENCES Aluno(id_aluno) NOT NULL,
    id_personal UUID REFERENCES Personal(id_personal) NOT NULL,
    data_hora DATETIME NOT NULL,
    duracao_minutos INT DEFAULT 60,
    status ENUM('AGENDADO', 'CONCLUIDO', 'CANCELADO') DEFAULT 'AGENDADO',
    local_tipo ENUM('PRESENCIAL', 'ONLINE') NOT NULL,
    observacoes TEXT
);

-- Índices para otimização de performance nas consultas do Dashboard
CREATE INDEX idx_treino_aluno ON Treino(id_aluno);
CREATE INDEX idx_agendamento_data ON Agendamento(data_hora);