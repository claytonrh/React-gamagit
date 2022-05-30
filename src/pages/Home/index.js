import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
// import Repositories from '../Repositories';

export default function App() {  
  const navigate = useNavigate();
  const [usuario, setUsuario ] = useState('');  
  const [erro, setErro] = useState(false);

  function handlePesquisa() {

    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
    const repositories = response.data;  
    const repositoriesName = []

    repositories.foreach((item) => repositoriesName.push(item.name))

    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
    setErro(false)
    navigate('/repositories') //nos envia para repositories
    })    
    .catch(err =>
      setErro(true)
      )
  }

  return ( 
    <S.HomeContainer>
    <S.Content>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} 
                    onChange={e => { setUsuario(e.target.value); setErro(false)}}/>
      <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>      
    </S.Content>

    {erro ? <S.ErrorMsg> Ocorreu um erro. Tente Novamente! </S.ErrorMsg> : ''}    
    </S.HomeContainer>    
  );
}


