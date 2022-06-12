import React from "react";

const Mahasiswa = (props) => {
  return (
    <div>
      <li className="list-group-item">
      <div className="row">
        <div className="col-md-3"><b>NIM</b></div>
        <div className="col-md-9">{props.data.nim}</div>
        <div className="col-md-3"><b>Nama</b></div>
        <div className="col-md-9">{props.data.nama}</div>
        <div className="col-md-3"><b>Alamat</b></div>
        <div className="col-md-9">{props.data.alamat}</div>
        <div className="col-md-3"><b>Ho HP</b></div>
        <div className="col-md-9">{props.data.hp}</div>
        <div className="col-md-3"><b>Angkatan</b></div>
        <div className="col-md-9">{props.data.angkatan}</div>
        <div className="col-md-3"><b>Status</b></div>
        <div className="col-md-9">{props.data.status}</div>
      </div>
        <button className="btn btn-sm btn-warning" onClick={() => props.hapus(props.data.id)}>Hapus</button>
      </li>
    </div>
  );
};

export default Mahasiswa;