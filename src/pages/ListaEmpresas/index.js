import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Background from '../../components/Background';
import NotImage from '../../assets/not_image.jpg';
import {
  Header,
  Container,
  ListaEmpresa,
  Empresa,
  Logo,
  Dados,
  NomeEmpresa,
  Local,
  Face,
  Twitter,
  Linkedin,
} from './styles';

export default function ListaEmpresas({ navigation, isFocused }) {
  const [empresas, setEmpresas] = useState([]);

  async function listagem() {
    const response = await api.get('/enterprises');
    setEmpresas(response.data.enterprises);
  }

  useEffect(() => {
    listagem();
  }, [isFocused]);

  return (
    <Background>
      <Header>Lista de Empresas</Header>
      <Container>
        <ListaEmpresa
          data={empresas}
          keyExtractor={empresa => String(empresa.id)}
          renderItem={({ item: empresa }) => (
            <Empresa
              onPress={() => {
                navigation.navigate('VerEmpresa', { empresa });
              }}
            >
              <Logo
                source={
                  empresa.photo
                    ? {
                        uri: `http://empresas.ioasys.com.br/${empresa.photo}`,
                      }
                    : NotImage
                }
              />
              <Dados>
                <NomeEmpresa>{empresa.enterprise_name}</NomeEmpresa>
                <Local>{`${empresa.city}, ${empresa.country}`}</Local>
                <Face>{`facebook: ${!empresa.facebook &&
                  'Não Informado'}`}</Face>
                <Twitter>{`twitter: ${!empresa.twitter &&
                  'Não Informado'}`}</Twitter>
                <Linkedin>{`linkedin: ${!empresa.linkedin &&
                  'Não Informado'}`}</Linkedin>
              </Dados>
            </Empresa>
          )}
        />
      </Container>
    </Background>
  );
}
