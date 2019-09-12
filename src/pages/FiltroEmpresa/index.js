import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from '../../components/Background';
import NotImage from '../../assets/not_image.jpg';
import api from '../../services/api';
import {
  Header,
  FormInput,
  Container,
  SubmitButton,
  ListaEmpresas,
  Empresa,
  Logo,
  Dados,
  NomeEmpresa,
  Local,
  Face,
  Twitter,
  Linkedin,
} from './styles';

export default function FiltroEmpresa() {
  const nameRef = useRef();

  const [types, setTypes] = useState('');
  const [name, setName] = useState('');
  const [empresas, setEmpresas] = useState([]);

  async function filtraEmpresas() {
    const response = await api.get('/enterprises', {
      params: {
        enterprise_types: types,
        name,
      },
    });
    setEmpresas(response.data.enterprises);
  }

  return (
    <Background>
      <Header>Filtro de Empresas</Header>
      <Container>
        <FormInput
          keyboardType="phone-pad"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Tipo Empresa"
          returnKeyType="next"
          onSubmitEditing={() => nameRef.current.focus()}
          value={types}
          onChangeText={setTypes}
        />
        <FormInput
          autoCorrect={false}
          placeholder="Nome"
          ref={nameRef}
          returnKeyType="send"
          onSubmitEditing={filtraEmpresas}
          value={name}
          onChangeText={setName}
        />
        <SubmitButton onPress={filtraEmpresas}>Pesquisar</SubmitButton>
        <ListaEmpresas
          data={empresas}
          keyExtractor={empresa => String(empresa.id)}
          renderItem={({ item: empresa }) => (
            <Empresa>
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

FiltroEmpresa.navigationOptions = {
  tabBarLabel: 'Filtrar Empresas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="filter" size={20} color={tintColor} />
  ),
};
