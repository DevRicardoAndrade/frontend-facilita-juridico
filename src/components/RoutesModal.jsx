import React, { useState } from "react";
import "./Modal.css";
import DataGrid from "./DataGrid";
import { useEffect } from "react";
import api from "../api";
import { useSearchParams } from "react-router-dom";

export default function RoutesModal() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [datatable, setDatatable] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/clients/routes");
      setDatatable(response);
    }
    fetchData();
  }, []);
  const columns = [
    { heading: "Id", value: "id" },
    { heading: "Nome", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Telefone", value: "telephone" },
    { heading: "X", value: "cordX" },
    { heading: "Y", value: "cordY" },
  ];
  const openedModal = searchParams.get("route");

  function handleClose() {
    setSearchParams((state) => {
      state.delete("route");
      return state;
    });
  }
  return (
    <>
      {openedModal ? (
        <div className="bg-modal">
          <div className="content-modal">
            <header className="header-modal">
              <button type="button" onClick={handleClose}>
                X
              </button>
            </header>
            <h1>Rotas Otimizadas</h1>
            <DataGrid datatable={datatable} column={columns} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
