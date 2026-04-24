import React, { useState } from 'react';
import { 
  Dumbbell, CheckCircle, LayoutDashboard, User, Zap, 
  Monitor, Shield, Users, ArrowRight, XCircle, Target, Activity, Lock, Mail 
} from 'lucide-react';

// --- COMPONENTES UI REUTILIZÁVEIS ---
const GlassCard = ({ children, style }) => (
  <div style={{
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(12px)',
    borderRadius: '28px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '32px',
    transition: '0.3s',
    ...style
  }}>{children}</div>
);

const SectionTitle = ({ subtitle, title, centered = true }) => (
  <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '60px' }}>
    <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>{subtitle}</span>
    <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '900', marginTop: '10px', lineHeight: '1.1' }}>{title}</h2>
  </div>
);

// --- APP PRINCIPAL ---
export default function OmniFitApp() {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null); // Gerencia o usuário logado e sessão
  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#050505',
    color: 'white',
    fontFamily: '"Inter", sans-serif',
    scrollBehavior: 'smooth'
  };

  // --- TELA 1: LANDING PAGE (CORRETA) ---
  if (page === 'landing') return (
    <div style={containerStyle}>
      <header style={{ position: 'absolute', top: 0, width: '100%', padding: '30px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', fontWeight: '900', letterSpacing: '-1px' }}>
          <div style={{ backgroundColor: '#22c55e', padding: '5px', borderRadius: '8px' }}><Dumbbell size={24} color="black" /></div>
          OMNIFIT<span style={{ color: '#22c55e' }}>.</span>
        </div>
      </header>

      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '0 20px',
        background: 'radial-gradient(circle at 50% -20%, #064e3b 0%, #050505 70%)'
      }}>
        <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '8px 20px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold', marginBottom: '30px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
          ⚡️ TECNOLOGIA QUE ACELERA SEU RESULTADO
        </div>
        <h1 style={{ fontSize: 'clamp(45px, 10vw, 90px)', fontWeight: '900', lineHeight: '0.85', letterSpacing: '-4px', margin: '0 0 30px 0' }}>
          EVOLUA SUA <br/><span style={{ color: '#22c55e' }}>EXPERIÊNCIA.</span>
        </h1>
        <p style={{ color: '#9ca3af', maxWidth: '600px', fontSize: '20px', lineHeight: '1.6', marginBottom: '50px' }}>
          A plataforma completa para alunos e personais que buscam alta performance, gestão simplificada e treinos inteligentes.
        </p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => setPage('plans')} style={{ backgroundColor: '#22c55e', color: 'black', border: 'none', padding: '20px 45px', borderRadius: '18px', fontWeight: '900', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 15px 30px rgba(34, 197, 94, 0.3)' }}>
            CONHEÇA NOSSOS PLANOS <ArrowRight size={20} />
          </button>
          <button onClick={() => setPage('login')} style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid #374151', padding: '20px 45px', borderRadius: '18px', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>ÁREA DO ALUNO</button>
        </div>
      </section>

      <section style={{ padding: '100px 20px', backgroundColor: '#080808', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
          <div><h3 style={{ fontSize: '48px', fontWeight: '900', color: '#22c55e', margin: 0 }}>+50k</h3><p style={{ color: '#4b5563', fontWeight: 'bold' }}>ALUNOS ATIVOS</p></div>
          <div><h3 style={{ fontSize: '48px', fontWeight: '900', color: '#22c55e', margin: 0 }}>98%</h3><p style={{ color: '#4b5563', fontWeight: 'bold' }}>SATISFAÇÃO</p></div>
          <div><h3 style={{ fontSize: '48px', fontWeight: '900', color: '#22c55e', margin: 0 }}>24/7</h3><p style={{ color: '#4b5563', fontWeight: 'bold' }}>SUPORTE TÉCNICO</p></div>
        </div>
      </section>

      <section style={{ padding: '120px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle subtitle="DIFERENCIAIS" title="Tudo o que você precisa em um só lugar" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <GlassCard>
            <Monitor size={40} color="#22c55e" style={{ marginBottom: '20px' }} />
            <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>Ecossistema Digital</h4>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>Interface web responsiva otimizada para qualquer dispositivo. Acesse seus treinos e métricas instantaneamente pelo navegador.</p>
          </GlassCard>
          <GlassCard>
            <Users size={40} color="#22c55e" style={{ marginBottom: '20px' }} />
            <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>Conexão com Personal</h4>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>Sincronização direta com seu treinador para ajustes imediatos e consultoria via chat integrado no painel.</p>
          </GlassCard>
          <GlassCard>
            <Shield size={40} color="#22c55e" style={{ marginBottom: '20px' }} />
            <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>Gestão de Pagamentos</h4>
            <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>Pagamento seguro via PIX ou Cartão com liberação automática de acesso à sua ficha de treino e dieta.</p>
          </GlassCard>
        </div>
      </section>
    </div>
  );

  // --- TELA DE LOGIN (NOVA) ---
  if (page === 'login') return (
    <div style={{...containerStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
      <GlassCard style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <Dumbbell size={40} color="#22c55e" style={{ margin: '0 auto 20px' }} />
        <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '10px' }}>Bem-vindo</h2>
        <p style={{ color: '#9ca3af', marginBottom: '30px' }}>Acesse seu painel exclusivo</p>
        
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#9ca3af', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>E-MAIL</label>
          <div style={{ display: 'flex', alignItems: 'center', background: '#111', border: '1px solid #1f2937', borderRadius: '12px', padding: '0 15px' }}>
            <Mail size={18} color="#4b5563" />
            <input 
  type="email" 
  placeholder="aluno@email.com" 
  value={emailInput}
  onChange={(e) => setEmailInput(e.target.value)}
  style={{ background: 'none', border: 'none', color: 'white', padding: '15px', width: '100%', outline: 'none' }} 
/>
          </div>
        </div>

        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
          <label style={{ display: 'block', color: '#9ca3af', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>SENHA</label>
          <div style={{ display: 'flex', alignItems: 'center', background: '#111', border: '1px solid #1f2937', borderRadius: '12px', padding: '0 15px' }}>
            <Lock size={18} color="#4b5563" />
           <input 
  type="password" 
  placeholder="••••••••" 
  value={senhaInput}
  onChange={(e) => setSenhaInput(e.target.value)}
  style={{ background: 'none', border: 'none', color: 'white', padding: '15px', width: '100%', outline: 'none' }} 
/>
          </div>
        </div>

        <button 
  onClick={() => {
    if(emailInput.includes('@')) {
      // Pega o texto antes do '@' e coloca a primeira letra em maiúsculo
      const loginNome = emailInput.split('@')[0];
      const nomeFormatado = loginNome.charAt(0).toUpperCase() + loginNome.slice(1);
      
      setUser({ nome: nomeFormatado, plano: "Omni Black" });
      setPage('dashboard');
      
      // Limpa os campos após o login
      setEmailInput('');
      setSenhaInput('');
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  }} 
  style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', backgroundColor: '#22c55e', color: 'black', fontWeight: '900', cursor: 'pointer' }}
>
  ENTRAR
</button>
        <button onClick={() => setPage('landing')} style={{ background: 'none', border: 'none', color: '#4b5563', marginTop: '20px', cursor: 'pointer', fontWeight: 'bold' }}>VOLTAR PARA HOME</button>
      </GlassCard>
    </div>
  );

// --- TELA 2: PLANOS (RESTAURAÇÃO DAS INFORMAÇÕES COMPLETAS) ---
  if (page === 'plans') return (
    <div style={{...containerStyle, padding: '100px 20px', background: 'radial-gradient(circle at 50% 0%, #064e3b 0%, #050505 50%)'}}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <button onClick={() => setPage('landing')} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', fontWeight: 'bold' }}>
          ← VOLTAR PARA HOME
        </button>

        <SectionTitle subtitle="PLANOS DISPONÍVEIS" title="Escolha a sua jornada de evolução" />

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
          
          {/* PLANO FIT */}
          <GlassCard style={{ flex: 1, minWidth: '320px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '10px' }}>Plano Fit</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '20px', minHeight: '42px' }}>O plano essencial para treinar quando quiser na unidade escolhida.</p>
            <div style={{ marginBottom: '30px' }}>
              <span style={{ fontSize: '14px', color: '#4b5563', textDecoration: 'line-through' }}>R$ 99,90</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '900', color: '#22c55e' }}>R$ 0,00*</span>
                <span style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>100% OFF</span>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '13px' }}>no 1º mês, depois R$ 99,90/mês</p>
            </div>
            <button onClick={() => setPage('login')} style={{ width: '100%', padding: '16px', borderRadius: '14px', border: 'none', backgroundColor: '#22c55e', color: 'black', fontWeight: '900', cursor: 'pointer', marginBottom: '30px' }}>CONTRATAR AGORA</button>
            <ul style={{ padding: 0, listStyle: 'none', borderTop: '1px solid #1f2937', paddingTop: '20px', flexGrow: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#d1d5db' }}><CheckCircle size={18} color="#22c55e" /> Área de musculação e aeróbicos</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#d1d5db' }}><CheckCircle size={18} color="#22c55e" /> OmniFit App</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#4b5563' }}><XCircle size={18} /> Acesso ilimitado a outras unidades</li>
            </ul>
          </GlassCard>

          {/* PLANO BLACK (O MAIS VANTAJOSO) */}
          <GlassCard style={{ flex: 1, minWidth: '320px', border: '2px solid #22c55e', position: 'relative', background: 'rgba(34, 197, 94, 0.05)', display: 'flex', flexDirection: 'column', transform: 'scale(1.02)' }}>
            <div style={{ position: 'absolute', top: '-15px', left: '20px', backgroundColor: '#22c55e', color: 'black', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '900' }}>O MAIS VANTAJOSO</div>
            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '10px' }}>Plano Black</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '20px', minHeight: '42px' }}>Acesso total às unidades OmniFit no Brasil e América Latina.</p>
            <div style={{ marginBottom: '30px' }}>
              <span style={{ fontSize: '14px', color: '#4b5563', textDecoration: 'line-through' }}>R$ 159,90</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '900', color: '#22c55e' }}>R$ 0,00*</span>
                <span style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>100% OFF</span>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '13px' }}>no 1º mês, depois R$ 159,90/mês</p>
            </div>
            <button onClick={() => setPage('login')} style={{ width: '100%', padding: '16px', borderRadius: '14px', border: 'none', backgroundColor: '#22c55e', color: 'black', fontWeight: '900', cursor: 'pointer', marginBottom: '30px' }}>CONTRATAR AGORA</button>
            <ul style={{ padding: 0, listStyle: 'none', borderTop: '1px solid #1f2937', paddingTop: '20px', flexGrow: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#d1d5db', fontWeight: 'bold' }}><CheckCircle size={18} color="#22c55e" /> Acesso ilimitado a +2.000 un.</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#d1d5db' }}><CheckCircle size={18} color="#22c55e" /> Leve 5 amigos por mês</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#d1d5db' }}><CheckCircle size={18} color="#22c55e" /> Cadeira de massagem</li>
            </ul>
          </GlassCard>

          {/* PLANO SMART */}
          <GlassCard style={{ flex: 1, minWidth: '320px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '10px' }}>Plano Smart</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '20px', minHeight: '42px' }}>Liberdade total sem fidelidade com infraestrutura de alto padrão.</p>
            <div style={{ marginBottom: '30px' }}>
              <span style={{ fontSize: '14px', color: '#4b5563', textDecoration: 'line-through' }}>R$ 119,90</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '900', color: '#22c55e' }}>R$ 0,00*</span>
                <span style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>100% OFF</span>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '13px' }}>no 1º mês, depois R$ 119,90/mês</p>
            </div>
            <button onClick={() => setPage('login')} style={{ width: '100%', padding: '16px', borderRadius: '14px', border: 'none', backgroundColor: '#22c55e', color: 'black', fontWeight: '900', cursor: 'pointer', marginBottom: '30px' }}>CONTRATAR AGORA</button>
            <ul style={{ padding: 0, listStyle: 'none', borderTop: '1px solid #1f2937', paddingTop: '20px', flexGrow: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#d1d5db' }}><CheckCircle size={18} color="#22c55e" /> Sem fidelidade</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#d1d5db' }}><CheckCircle size={18} color="#22c55e" /> Área de musculação e aeróbicos</li>
            </ul>
          </GlassCard>
        </div>
        <p style={{ textAlign: 'center', color: '#4b5563', marginTop: '40px', fontSize: '12px' }}>* Promoção válida por tempo limitado. Consulte regulamento de fidelidade.</p>
      </div>
    </div>
  );

  // --- TELA 3: DASHBOARD (CORRIGIDA) ---
if (page === 'dashboard' && user) return (
  <div style={{...containerStyle, display: 'flex', backgroundColor: '#050505'}}>
      <aside style={{width: '280px', borderRight: '1px solid #1f2937', padding: '40px 24px', display: 'flex', flexDirection: 'column'}}>
        <div style={{fontWeight: '900', fontSize: '24px', color: '#22c55e', marginBottom: '40px'}}>OMNIFIT.</div>
        <nav style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <div style={{padding: '16px', borderRadius: '12px', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <LayoutDashboard size={20}/> DASHBOARD
          </div>
          <div style={{padding: '16px', borderRadius: '12px', color: '#4b5563', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px'}}>
            <User size={20}/> MEU PERFIL
          </div>
        </nav>
      </aside>

      <main style={{flex: 1, padding: '60px', overflowY: 'auto'}}>
        <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'60px'}}>
          <h2 style={{fontSize: '40px', fontWeight: '900'}}>Olá, {user.nome}! 👋</h2>
          <button onClick={() => { setUser(null); setPage('landing'); }} style={{background:'rgba(255,255,255,0.05)', border:'1px solid #374151', color:'#9ca3af', padding:'12px 24px', borderRadius:'12px', cursor:'pointer', fontWeight: 'bold'}}>Sair</button>
        </header>

        <div style={{ maxWidth: '800px' }}>
          <SectionTitle subtitle="SUA JORNADA" title="Treino planejado para hoje" centered={false} />
          <GlassCard style={{ borderLeft: '6px solid #22c55e', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{fontSize: '12px', color: '#4b5563', fontWeight: 'bold'}}>FOCO DO DIA</span>
                <h3 style={{fontSize: '48px', fontWeight: '900', margin: '16px 0'}}>Peito e Tríceps</h3>
                <p style={{color: '#9ca3af', marginBottom: '32px', fontSize: '18px'}}><Zap size={18} color="#22c55e" style={{verticalAlign: 'middle', marginRight: '8px'}} /> Plano Ativo: {user.plano}</p>
              </div>
              <Activity size={48} color="rgba(34, 197, 94, 0.2)" />
            </div>
            <button onClick={() => alert('Treino Iniciado!')} style={{backgroundColor: '#22c55e', color: 'black', padding: '18px 45px', borderRadius: '16px', border: 'none', fontWeight: '900', cursor: 'pointer', fontSize: '16px', boxShadow: '0 10px 20px rgba(34, 197, 94, 0.2)'}}>INICIAR AGORA</button>
          </GlassCard>
        </div>
      </main>
    </div>
  );

  return null;
}