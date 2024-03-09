export default function HomePage() {
  return (
    <div className="container">
      <h1>Teste Facilita Juridico</h1>
      <p>
        Este teste foi criado utilizando node no backend com TypeScript e React
        no Frontend.
      </p>
      <h3>
        Repositório Backend:
        <u>
          {" "}
          <a href="https://github.com/DevRicardoAndrade/backend-facilita-juridico">
            Clique aqui para ver!
          </a>
        </u>
      </h3>
      <h3>
        Repositório Frontend:
        <u>
          {" "}
          <a href="https://github.com/DevRicardoAndrade/frontend-facilita-juridico">
            Clique aqui para ver!
          </a>
        </u>
      </h3>
    </div>
  );
}
