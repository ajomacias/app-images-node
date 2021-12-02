import React, { Fragment, useState } from "react"
import axios from "axios"


function App() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([])


  const viewImages = async()=>{
    const res = await axios.get("http://localhost:9000/images")
    setImages(res.data.data);
    console.log(res.data.data[0].data)

  }

  const selectedHandler = (e) => {
    setFile(e.target.files[0])
  }
  const sendHandler = async () => {
    if (!file) {
      alert("debe ingresar algun archivo")
      return
    }
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post("http://localhost:9000/images/post",
      formData)
      alert(res.data.msj)
    } catch (ex) {
      console.log(ex)
    }


    setFile(null);
    document.getElementById("Fileinput").value = null;
  }
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">Image App</a>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="card p-3" >
          <div className="row">
            <div className="col-10">
              <input id="Fileinput" onChange={selectedHandler} className="form-control" type="file" />
            </div>
            <div className="col-2">
              <button onClick={sendHandler} className="btn btn-primary col-12">upload</button>
            </div>
            <button onClick={viewImages}>ver imagenes</button>
          </div>
        </div>
      </div>
    {
      images.map((item,index)=> (
        <img key={index} src={item.data} />
      ))
    }
    </>
  );
}

export default App;
