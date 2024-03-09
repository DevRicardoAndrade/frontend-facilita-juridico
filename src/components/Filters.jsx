import "./Filters.css";
import { useSearchParams } from "react-router-dom";
export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const name = searchParams.get("name") ?? "";
  const email = searchParams.get("email") ?? "";
  const telephone = searchParams.get("telephone") ?? "";
  function removeSearchParams() {
    setSearchParams((state) => {
      state.delete("id");
      state.delete("name");
      state.delete("email");
      state.delete("telephone");
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    removeSearchParams();

    const id = e.target.id.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const telephone = e.target.telephone.value;
    setSearchParams((state) => {
      if (id) state.set("id", id);
      if (name) state.set("name", name);
      if (email) state.set("email", email);
      if (telephone) state.set("telephone", telephone);
      return state;
    });
  }
  return (
    <form className="filters" onSubmit={handleSubmit}>
      <div className="group">
        <input type="text" name="id" placeholder="Id" defaultValue={id} />
      </div>
      <div className="group">
        <input type="text" name="name" placeholder="Nome" defaultValue={name} />
      </div>
      <div className="group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          defaultValue={email}
        />
      </div>
      <div className="group">
        <input
          type="text"
          name="telephone"
          placeholder="Telefone"
          defaultValue={telephone}
        />
      </div>
      <button type="submit">
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          width="30px"
          height="30px"
          viewBox="0 0 31.682 31.682"
        >
          <g>
            <g>
              <path
                d="M7.042,23.229H5.705c-0.553,0-0.984,0.459-0.984,1.015v0.708H4.276c-0.555,0-0.932-0.41-0.932-0.964v-1.063
			c0-0.557,0.377-1.07,0.932-1.07h2.118c-0.513-1.202-0.798-2.604-0.798-4.045c0-5.979,4.805-10.806,10.779-10.806
			c1.768,0,3.489,0.442,4.866,1.193V2.992C21.241,1.368,20.002,0,18.375,0H4.143C2.518,0,1.279,1.368,1.279,2.992V24.12
			c0,1.626,1.239,2.896,2.864,2.896h0.578v1.604c0,0.183,0.087,0.349,0.244,0.438c0.156,0.091,0.343,0.088,0.5-0.002l2.367-1.379
			l2.368,1.379c0.156,0.09,0.328,0.093,0.484,0.002c0.156-0.09,0.232-0.256,0.232-0.438v-1.44
			C9.367,26.225,7.983,24.951,7.042,23.229z"
              />
              <path
                d="M15.641,21.18c-2.418-0.439-3.024-2.772-3.05-2.881c-0.119-0.498-0.616-0.804-1.118-0.689
			c-0.5,0.117-0.812,0.617-0.694,1.117c0.034,0.147,0.888,3.625,4.53,4.285c0.057,0.013,0.112,0.017,0.167,0.017
			c0.442,0,0.835-0.315,0.917-0.767C16.484,21.756,16.146,21.27,15.641,21.18z"
              />
              <path
                d="M29.965,27.291l-3.556-3.554c-0.19-0.193-0.435-0.322-0.694-0.379c-0.095-0.021-0.191-0.032-0.291-0.032
			c-0.371,0-0.728,0.146-0.988,0.411l-0.967-0.97c2.578-3.527,2.274-8.521-0.91-11.708c-1.705-1.707-3.975-2.646-6.387-2.646
			c-2.412,0-4.68,0.939-6.387,2.646c-1.706,1.706-2.645,3.975-2.645,6.387c-0.001,2.411,0.939,4.68,2.645,6.386
			c1.707,1.707,3.974,2.646,6.387,2.646c1.939,0,3.788-0.606,5.322-1.732l0.968,0.966v0.003c-0.361,0.357-0.482,0.868-0.365,1.327
			c0.061,0.236,0.182,0.461,0.365,0.646l3.555,3.556c0.279,0.28,0.658,0.438,1.053,0.438c0.396,0,0.775-0.155,1.057-0.438
			l1.844-1.845C30.547,28.815,30.547,27.872,29.965,27.291z M20.582,21.86c-1.179,1.176-2.746,1.825-4.412,1.825
			c-1.666,0-3.233-0.649-4.41-1.825c-1.178-1.183-1.827-2.746-1.827-4.411c0-1.668,0.649-3.232,1.827-4.413
			c1.177-1.176,2.745-1.826,4.41-1.826c1.666,0,3.233,0.65,4.412,1.826C23.014,15.47,23.014,19.43,20.582,21.86z"
              />
              <circle cx="11.879" cy="15.722" r="0.912" />
            </g>
          </g>
        </svg>
        Filtrar Resultados
      </button>
    </form>
  );
}
