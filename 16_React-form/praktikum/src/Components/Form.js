import { useRef, useState } from "react";

const Form = () => {
  /**
   * Deklarasi nilai awal untuk data status
   * @constant
   * @type {object}
   */
  const dataKosong = {
    namaLengkap: "",
    email: "",
    noHandphone: "",
    pendidikan: {
      IT: false,
      NonIT: false,
    },
    program: "",
    harapan: "",
  };

  /**
   * Deklarasi nilai awal untuk data status error
   * @constant
   * @type {object}
   */
  const baseError = {
    namaLengkap: "",
    email: "",
    noHandphone: "",
  };

  const [data, setData] = useState(dataKosong);
  const [errMsg, setErrMsg] = useState(baseError);
  const suratKesungguhan = useRef(null);
  const regexLetterOnly = /^[A-Za-z ]*$/;
  const regexNumberOnly = /^[0-9]*$/;
  const regexForEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "namaLengkap") {
      if (regexLetterOnly.test(value)) {
        setErrMsg({
          ...errMsg,
          namaLengkap: "",
        });
      } else {
        setErrMsg({
          ...errMsg,
          namaLengkap: "Nama Harus Berupa Huruf",
        });
      }
    }

    if (name === "email") {
      if (regexForEmail.test(value)) {
        setErrMsg({
          ...errMsg,
          email: "",
        });
      } else {
        setErrMsg({
          ...errMsg,
          email: "Email Tidak Sesuai",
        });
      }
    }

    if (name === "noHandphone") {
      if (regexNumberOnly.test(value)) {
        setErrMsg({
          ...errMsg,
          noHandphone: "",
        });
      } else {
        setErrMsg({
          ...errMsg,
          noHandphone: "No Handphone Tidak Sesuai",
        });
      }
    }

    if (name === "pendidikan") {
      const newData = { ...data };
      const pendidikan = newData[e.target.name];
      const nameOfPendidikan = e.target.value;
      const newPendidikan = { ...pendidikan };
      Object.keys(pendidikan).forEach((val) => {
        val === nameOfPendidikan ? (newPendidikan[val] = e.target.checked) : (newPendidikan[val] = false);
      });
      newData[e.target.name] = newPendidikan;
      setData(newData);
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errMsg.namaLengkap !== "" || errMsg.email !== "" || errMsg.noHandphone !== "") {
      alert("Data Pendaftar Tidak Sesuai");
    } else {
      alert(`Data Pendaftar ${data.namaLengkap} Berhasil Diterima`);
      setData(dataKosong);
      suratKesungguhan.current.value = "";
    }
  };

  const resetData = () => {
    setData(dataKosong);
    setErrMsg(baseError);
    suratKesungguhan.current.value = "";
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Nama Lengkap:</label>
        <input type="text" name="namaLengkap" required placeholder="Your Name Here" onChange={handleInput} value={data.namaLengkap} />

        <label>Email:</label>
        <input type="email" name="email" required placeholder="yourEmail@gmail.com" onChange={handleInput} value={data.email} />

        <label>No Handphone:</label>
        <input type="tel" name="noHandphone" required placeholder="0823xxxxxxxx" onChange={handleInput} value={data.noHandphone} minLength="9" maxLength="14" />

        <label>Latar Belakang Pendidikan:</label>
        <div>
          <input type="radio" name="pendidikan" value="IT" checked={data.pendidikan.IT} onChange={handleInput} required /> IT
          <input type="radio" name="pendidikan" value="NonIT" checked={data.pendidikan.NonIT} onChange={handleInput} /> Non IT
        </div>

        <label>Kelas coding yang dipilih:</label>
        <select name="program" required onChange={handleInput} value={data.program}>
          <option value="">Pilih Salah Satu Program</option>
          <option value="backend">Coding Backend with Golang</option>
          <option value="frontend">Coding Frontend with ReactJS</option>
          <option value="fullstack">Fullstack Developer</option>
          <option value="designer">Professional UI/UX Designer</option>
          <option value="flutter">Mastering Flutter</option>
          <option value="quality">Quality Engineer</option>
        </select>

        <label>Foto Surat Kesungguhan:</label>
        <input type="file" ref={suratKesungguhan} required />

        <label>Harapan untuk Coding Bootcamp ini:</label>
        <textarea cols="20" rows="5" name="harapan" onChange={handleInput} value={data.harapan}></textarea>

        <p className="errMsg">{errMsg.namaLengkap}</p>
        <p className="errMsg">{errMsg.email}</p>
        <p className="errMsg">{errMsg.noHandphone}</p>

        <input type="submit" value="Submit" />
        <button className="btn-reset" onClick={resetData}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Form;