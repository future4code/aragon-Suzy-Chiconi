import Header from '../components/Header';


// Função que renderiza a página inicial.
function HomePage() {
  return (
    <>
      <Header
        actualPage={"home-page"}
      />
      <hr />
      <main>
        <section>
          <h2>Inscreva-se numa nova viagem!</h2>
        </section>
        <hr />
        <section>
          <h2>Lista de viagens</h2>
        </section>
      </main>
    </>
  );
};

export default HomePage;