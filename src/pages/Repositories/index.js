import React, {useEffect, useState} from 'react'; // Hooke {useEffect monitora uma variavel e dispara uma função quando está variavel é alterada}
import * as S from './styled';
import { useNavigate } from "react-router-dom";

export default function Repositories() {
  const navigate = useNavigate ()
  const [repositories, setRepositories]  = useState([])

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName')

    console.log(repositoriesName)
    if (repositoriesName) {
      repositoriesName = JSON.parse(repositoriesName)
      setRepositories(repositoriesName)
      localStorage.clear()
    } else {
      navigate('/')
    }    
  }, [navigate]);

    return (    
    <S.Container>
      <S.Title>Repositorios</S.Title>    
      <S.List>                       
          {repositories.map((repository, index) => <S.ListItem key ={index}> {repository} </S.ListItem>)}          
    </S.List>    

    <S.LinkHome to='/'> Voltar</S.LinkHome>
    </S.Container>    
  )
}
