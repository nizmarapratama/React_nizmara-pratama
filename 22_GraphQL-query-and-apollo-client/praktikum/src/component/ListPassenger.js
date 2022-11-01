import React from "react";
import ListItem from "./ListItem";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

const GetDaftarpengunjung = gql`
  query MyQuery {
    daftar_pengunjung_stasiun_gubeng {
      nama
      umur
      jenis_kelamin
    }
  }
`;

const ListPassenger = () => {
  const { data, loading, error } = useQuery(GetDaftarpengunjung);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>nama</td>
          <td>umur</td>
          <td>jenis kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>

        {data?.daftar_pengunjung_stasiun_gubeng.map((item) => (
          <React.Fragment key={item.id}>
            <tr>
              <td>{item.nama}</td>
              <td>{item.umur}</td>
              <td>{item.jenis_kelamin}</td>
            </tr>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;