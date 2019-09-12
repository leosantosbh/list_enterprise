import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from '../../components/Background';
import NotImage from '../../assets/not_image.jpg';
import {
  Header,
  TextHeader,
  Container,
  Logo,
  Nome,
  Tipo,
  Local,
  Descricao,
  Email,
  Fone,
  Face,
  Linkedin,
  Twitter,
} from './styles';
import api from '../../services/api';

export default function VerEmpresa({ navigation }) {
  const [detalhe, setDetalhe] = useState([]);
  const [tipo, setTipo] = useState([]);

  const empresa = navigation.getParam('empresa');

  async function detalhesEmpresa() {
    const response = await api.get(`/enterprises/${empresa.id}`);
    setDetalhe(response.data.enterprise);
    setTipo(response.data.enterprise.enterprise_type);
  }

  useEffect(() => {
    detalhesEmpresa();
  }, []);

  return (
    <Background>
      <Header>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ListaEmpresas');
          }}
        >
          <Icon name="chevron-left" size={42} color="#FFF" />
        </TouchableOpacity>
        <TextHeader>Detalhes</TextHeader>
      </Header>
      <Container>
        <Logo
          source={
            detalhe.photo
              ? {
                  uri: `http://empresas.ioasys.com.br/${detalhe.photo}`,
                }
              : NotImage
          }
        />
        <Nome>{detalhe.enterprise_name}</Nome>
        <Tipo>{tipo.enterprise_type_name}</Tipo>
        <Local>{`${detalhe.city}, ${detalhe.country}`}</Local>
        <Descricao>{detalhe.description}</Descricao>
        <Email>
          <Icons name="email" size={20} color="#222" />
          {` - ${!detalhe.email_enterprise && 'Não Informado'}`}
        </Email>
        <Fone>
          <Icons name="phone" size={20} color="#222" />
          {` - ${!detalhe.phone && 'Não Informado'}`}
        </Fone>
        <Face>
          <Icons name="facebook" size={20} color="#222" />
          {` - ${!detalhe.facebook && 'Não Informado'}`}
        </Face>
        <Linkedin>
          <Icons name="linkedin-box" size={20} color="#222" />
          {` - ${!detalhe.linkedin && 'Não Informado'}`}
        </Linkedin>
        <Twitter>
          <Icons name="twitter" size={20} color="#222" />
          {` - ${!detalhe.twitter && 'Não Informado'}`}
        </Twitter>
      </Container>
    </Background>
  );
}
