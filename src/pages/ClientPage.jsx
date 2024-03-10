import React, { useState } from "react";
import "./Client.css";
import DataGrid from "../components/DataGrid";
import { useEffect } from "react";
import api from "../api";
import { useSearchParams } from "react-router-dom";
import RoutesModal from "../components/RoutesModal";
import NewClientModal from "../components/NewClientModal";
import Filters from "../components/Filters";
export default function ClientPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [datatable, setDatatable] = useState([]);

  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const telephone = searchParams.get("telephone");

  useEffect(() => {
    async function fetchData() {
      let endpoint = "/clients";
      if (id) {
        endpoint += `?id=${id}`;
      }
      if (name) {
        if (!id) endpoint += `?name=${name}`;
        else endpoint += `&name=${name}`;
      }
      if (email) {
        if (!id && !name) endpoint += `?email=${email}`;
        else endpoint += `&email=${email}`;
      }
      if (telephone) {
        if (!id && !name && !email) endpoint += `?telephone=${telephone}`;
        else endpoint += `&telephone=${telephone}`;
      }
      const response = await api.get(endpoint);
      setDatatable(response);
    }
    fetchData();
  }, [id, name, email, telephone]);

  const columns = [
    { heading: "Id", value: "id" },
    { heading: "Nome", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Telefone", value: "telephone" },
    { heading: "X", value: "cordX" },
    { heading: "Y", value: "cordY" },
  ];

  function handleClickRoute() {
    setSearchParams((state) => {
      state.set("route", true);
      return state;
    });
  }
  return (
    <div className="container">
      <RoutesModal />
      <NewClientModal />
      <h1>Clientes</h1>
      <Filters />
      <DataGrid datatable={datatable} column={columns} />
      <footer className="footer">
        <button className="btn-rotas" type="button" onClick={handleClickRoute}>
          Ver rotas otimizadas
        </button>
      </footer>
    </div>
  );
}
