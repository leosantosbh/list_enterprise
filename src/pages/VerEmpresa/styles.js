import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 10px;
  align-self: center;
`;

export const Nome = styled.Text`
  font-size: 22px;
  font-weight: bold;
  align-self: center;
`;

export const Tipo = styled.Text`
  font-size: 19px;
  color: #ddd;
  align-self: center;
`;

export const Local = styled.Text`
  font-size: 13px;
  color: #222;
  align-self: center;
`;

export const Descricao = styled.Text.attrs({
  numberOfLines: 6,
})`
  font-size: 13px;
  color: #222;
  margin: 10px 20px 0 20px;
`;

export const Email = styled.Text`
  font-size: 13px;
  color: #222;
  margin: 10px 20px 5px 20px;
`;

export const Fone = styled.Text`
  font-size: 13px;
  color: #222;
  margin: 0px 20px 5px 20px;
`;

export const Face = styled.Text`
  font-size: 13px;
  color: #222;
  margin: 0px 20px 5px 20px;
`;

export const Linkedin = styled.Text`
  font-size: 13px;
  color: #222;
  margin: 0px 20px 5px 20px;
`;

export const Twitter = styled.Text`
  font-size: 13px;
  color: #222;
  margin: 0px 20px 5px 20px;
`;
