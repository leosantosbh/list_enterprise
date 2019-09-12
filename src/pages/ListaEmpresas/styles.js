import styled from 'styled-components/native';

export const Header = styled.Text`
  align-self: center;
  padding-top: 15px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const Container = styled.View`
  flex: 1;
  margin: 25px 20px 0px 20px;
`;

export const ListaEmpresa = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const Empresa = styled.TouchableOpacity`
  background: #ddd;
  border-radius: 6px;
  margin-top: 10px;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 10px;
`;

export const Dados = styled.View`
  margin: 10px;
`;

export const NomeEmpresa = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const Local = styled.Text`
  font-size: 15px;
`;

export const Face = styled.Text`
  font-size: 13px;
  color: #222;
`;

export const Twitter = styled.Text`
  font-size: 13px;
  color: #222;
`;

export const Linkedin = styled.Text`
  font-size: 13px;
  color: #222;
`;
