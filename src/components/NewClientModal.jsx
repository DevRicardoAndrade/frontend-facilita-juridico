import React from "react";
import "./Modal.css";
import { useSearchParams } from "react-router-dom";
import api from "../api";

export default function NewClientModal() {
  const [searchParams, setSearchParams] = useSearchParams();

  const openedModal = searchParams.get("new");

  function handleClose() {
    setSearchParams((state) => {
      state.delete("new");
      return state;
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const telephone = e.target.telephone.value;
    const cordX = e.target.cordX.value;
    const cordY = e.target.cordY.value;
    const payload = {
      name,
      email,
      telephone,
      cordX,
      cordY,
    };
    const { id } = await api.post("/clients", payload);
    if (id) {
      handleClose();
      alert("Cliente cadastrado!");
    }
  }

  return (
    <>
      {openedModal ? (
        <div className="bg-modal">
          <div className="content-modal new">
            <header className="header-modal">
              <button type="button" onClick={handleClose}>
                X
              </button>
            </header>
            <h1>Novo Cliente</h1>
            <form onSubmit={handleSubmit}>
              <div className="group">
                <input type="text" name="name" placeholder="Nome" />
              </div>
              <div className="group">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="group">
                <input type="text" name="telephone" placeholder="Telefone" />
              </div>
              <div className="group">
                <input type="text" name="cordX" placeholder="X" />
              </div>
              <div className="group">
                <input type="text" name="cordY" placeholder="Y" />
              </div>
              <button className="btn-new" type="submit">
                Salvar
              </button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
