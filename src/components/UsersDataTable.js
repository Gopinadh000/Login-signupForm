import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const UsersDataTable = (props) => {
  const details = props.usersData;
  console.log(details);
  const [alldata, setAllData] = useState([]);

  useEffect(() => {
    setAllData([...alldata, details]);
    console.log(alldata);
  }, [details]);

  const columns = [
    {
      name: "S.no",
      selector: (row) => row.length,
      sortable: true,
    },
    {
      name: "Full name",
      selector: (row) => row.fullname,
      sortable: true,
    },
    {
      name: "User name",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "E mail",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.number,
      sortable: true,
    },
  ];
  const customStyles = {
    table: {
      style: {
        backgroundColor: "rgb(4, 4, 63)",
        border: "1px solid #fff",
        color: "black",
      },
    },
    headCells: {
      style: {
        fontWeight: "700",
        fontSize: "15px",
        backgroundColor: "blue",
        color: "#fff",
        border: "2px solid #fff",
        opacity: "0.8",
        textAlign: "center",
      },
    },
    rows: {
      style: {
        fontSize: "15px",
        color: "#blue",
        opacity: "0.7",
      },
    },
    cells: {
      style: {
        border: "0.5px solid #fff",
      },
    },
  };

  return (
    <div className="datatablecontainer">
      <DataTable
        title="Registred Users"
        className="datatable"
        columns={columns}
        data={alldata}
        pointerOnHover
        highlightOnHover
        customStyles={customStyles}
      />
    </div>
  );
};

export default UsersDataTable;
