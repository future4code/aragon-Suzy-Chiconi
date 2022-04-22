import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/Card Pequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components';

const AppStyle = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

.page-section-container {
  width: 40vw;
  margin: 10px 0;
}

.page-section-container > h3 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
`

function App() {
  return (
    <AppStyle>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQHE7V7C0iCenw/profile-displayphoto-shrink_400_400/0/1517347681667?e=1655942400&v=beta&t=rjpXmBy3q01IDmJHhoDzvHmsEI63jHXw-3W2qAjOXHY"
          nome="Suzy Chiconi" 
          descricao="Meu nome é Suzy, e sou de São Paulo-SP. Sou estudante WebFull Stack da Labenu, onde busco conhecimentos para atuar profissionalmente na RD ao final do curso."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/6819/6819501.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3059/premium/3059486.png?token=exp=1650412087~hmac=74104152a2e741212f571ef8b19cbd85"
          email="e-mail: suzy.chiconi@gmail.com"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/67/67872.png"
          endereco="Endereço: Rua Labenu, s/nº"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/99296127_575260363119101_713037980717023232_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6zlHdq_eecUAX9Z0_i8&_nc_ht=scontent-gru1-2.xx&oh=00_AT_OPCHn74W1sXWEuXwcyRjlr7n9O2KSuBw_Nmn6x6ofbw&oe=6286C508" 
          nome="Labenu" 
          descricao="Buscando conhecimentos para atuar profissionalmente como desenvolvedora web full stack." 
        />
        
        <CardGrande 
          imagem="https://logospng.org/download/raia-drogasil/logo-raia-drogasil-2048.png" 
          nome="RD Raia Drogasil" 
          descricao="Contratada em estágio de aprendizagem, para atuar na equipe de desenvolvedores." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </AppStyle>
  );
}

export default App;
