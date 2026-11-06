/* S.A.R.A — integração REST com Supabase. JavaScript puro, sem backend próprio. */
const SARA_SUPABASE_URL = 'https://awtoipbwnnrwvvznqjyb.supabase.co';
const SARA_SUPABASE_KEY = 'sb_publishable_LuCAAdnBbaKw64G_cYa2_A_pxTaNN8j';
const SARA_SESSION_KEY = 'sara_supabase_session_v1';

const CATALOGO_PRODUTOS = [
  {nome:'Perfume Essência Noir 100ml',marca:'Marca Premium',categoria:'Perfumes',origem:'Fábrica SP'},
  {nome:'Analgésico Pharma 500mg',marca:'Pharma Brasil',categoria:'Medicamentos',origem:'Laboratório RJ'},
  {nome:'Bolsa Couro Edição Limitada',marca:'LuxBrand',categoria:'Luxo',origem:'Importado — Itália'},
  {nome:'Smartphone X1 128GB',marca:'TechBrand',categoria:'Eletrônicos',origem:'Manaus AM'},
  {nome:'Vinho Reserva 750ml',marca:'Vinícola Sul',categoria:'Bebidas',origem:'Vinícola RS'},
  {nome:'Creme Facial Anti-idade',marca:'Cosméticos Bela',categoria:'Cosméticos',origem:'Fábrica MG'},
  {nome:'Pastilha de Freio Original',marca:'AutoPeças Pro',categoria:'Autopeças',origem:'Fábrica PR'}
];

function saraSessao(){try{return JSON.parse(localStorage.getItem(SARA_SESSION_KEY)||'null')}catch{return null}}
function sessaoAtual(){const s=saraSessao();return s?.user?{usuario:s.user.email,login:s.created_at}:null}
function saraSalvarSessao(s){localStorage.setItem(SARA_SESSION_KEY,JSON.stringify(s))}
async function saraRequest(path,options={}){
  const s=saraSessao();
  const headers={'apikey':SARA_SUPABASE_KEY,'Content-Type':'application/json',...(options.headers||{})};
  if(s?.access_token) headers.Authorization='Bearer '+s.access_token;
  else headers.Authorization='Bearer '+SARA_SUPABASE_KEY;
  let response=await fetch(SARA_SUPABASE_URL+path,{...options,headers});
  let body=await response.text(); let data=null;
  try{data=body?JSON.parse(body):null}catch{data=body}
  if(!response.ok) throw new Error(data?.message||data?.msg||data?.error_description||data?.hint||'Falha ao comunicar com o Supabase ('+response.status+').');
  return data;
}
async function saraRefreshSession(){
  const s=saraSessao(); if(!s?.refresh_token) return null;
  try{
    const r=await fetch(SARA_SUPABASE_URL+'/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{apikey:SARA_SUPABASE_KEY,'Content-Type':'application/json'},body:JSON.stringify({refresh_token:s.refresh_token})});
    const d=await r.json(); if(!r.ok) throw new Error(d.message||'Sessão expirada');
    saraSalvarSessao(d); return d;
  }catch{localStorage.removeItem(SARA_SESSION_KEY);return null}
}
async function autenticar(email,senha){
  const r=await fetch(SARA_SUPABASE_URL+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:SARA_SUPABASE_KEY,'Content-Type':'application/json'},body:JSON.stringify({email:email.trim(),password:senha})});
  const d=await r.json();
  if(!r.ok) throw new Error(d.msg||d.message||'E-mail ou senha incorretos.');
  saraSalvarSessao(d);
  try{
    const perfil=await saraRequest('/rest/v1/perfis?select=nome,papel,ativo&user_id=eq.'+encodeURIComponent(d.user.id));
    if(!perfil?.length||!perfil[0].ativo){await logout();throw new Error('Usuário autenticado, mas sem perfil ativo no S.A.R.A. Solicite liberação ao administrador.')}
    d.perfil=perfil[0]; saraSalvarSessao(d);
  }catch(e){await logout();throw e}
  return true;
}
async function logout(){
  const s=saraSessao();
  if(s?.access_token){try{await fetch(SARA_SUPABASE_URL+'/auth/v1/logout',{method:'POST',headers:{apikey:SARA_SUPABASE_KEY,Authorization:'Bearer '+s.access_token}})}catch{}}
  localStorage.removeItem(SARA_SESSION_KEY);
}
async function exigirLogin(){
  let s=saraSessao();
  if(!s?.access_token){location.href='login.html';return false}
  if(s.expires_at && s.expires_at*1000<Date.now()+30000){s=await saraRefreshSession()}
  if(!s?.access_token){location.href='login.html';return false}
  try{
    const p=await saraRequest('/rest/v1/perfis?select=nome,papel,ativo&user_id=eq.'+encodeURIComponent(s.user.id));
    if(!p?.length||!p[0].ativo) throw new Error('Perfil sem acesso');
    s.perfil=p[0];saraSalvarSessao(s);return true;
  }catch{await logout();location.href='login.html';return false}
}
function gerarCodigoAleatorio(){const a=new Uint8Array(16);crypto.getRandomValues(a);return 'SARA-'+new Date().getFullYear()+'-'+Array.from(a).map(x=>x.toString(16).padStart(2,'0')).join('').toUpperCase()}
function gerarLote(){const d=new Date();return 'LT-'+d.getFullYear()+String(d.getMonth()+1).padStart(2,'0')+'-'+String(Math.floor(Math.random()*999)+1).padStart(3,'0')}
function normalizarCodigo(c){let v=(c||'').trim();try{const u=new URL(v);v=u.searchParams.get('codigo')||u.searchParams.get('qrcode')||u.pathname.split('/').pop()||v}catch{}return v.trim().toUpperCase()}
async function registrarNovoProduto(){
  const b=CATALOGO_PRODUTOS[Math.floor(Math.random()*CATALOGO_PRODUTOS.length)];
  const q=gerarCodigoAleatorio(), lote=gerarLote();
  return await saraRequest('/rest/v1/rpc/sara_registrar_produto',{method:'POST',body:JSON.stringify({p_nome:b.nome,p_marca:b.marca,p_categoria:b.categoria,p_origem:b.origem,p_lote:lote,p_qrcode:q})});
}
async function registrarVenda(codigo,localVenda,valorVenda,vendedor){
  return await saraRequest('/rest/v1/rpc/sara_registrar_venda',{method:'POST',body:JSON.stringify({p_qrcode:normalizarCodigo(codigo),p_local_venda:localVenda||'Loja Demonstração — PDV 01',p_valor_venda:valorVenda?Number(valorVenda):null,p_vendedor:vendedor||null})});
}
async function verificarCodigo(codigo){
  const c=normalizarCodigo(codigo);
  if(!c)return {resultado:'erro',mensagem:'Informe um código para verificar.'};
  return await saraRequest('/rest/v1/rpc/sara_verificar_codigo',{method:'POST',body:JSON.stringify({p_qrcode:c})});
}
async function listarProdutos(){return await saraRequest('/rest/v1/rpc/sara_listar_produtos',{method:'POST',body:'{}'})}
async function listarLogs(){return await saraRequest('/rest/v1/rpc/sara_listar_logs',{method:'POST',body:'{}'})}
async function estatisticas(){return await saraRequest('/rest/v1/rpc/sara_estatisticas',{method:'POST',body:'{}'})}
function formatarData(iso){if(!iso)return '—';return new Date(iso).toLocaleDateString('pt-BR')}
function formatarDataHora(iso){if(!iso)return '—';return new Date(iso).toLocaleString('pt-BR')}
