import "../Authentication/login.css";
import "./AddContent.css";
import  storage  from "../firebase";
import { useState } from "react";
import useFetch from "../Hook/UseFetch";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddArticles = () => {
  const [file, setFile] = useState("");
  // progress
  const [percent, setPercent] = useState(0);

  const [title, settitle] = useState();
  const [creator, setcreator] = useState();
  const [createdate, setcreatedate] = useState();
  const [discription, setdiscription] = useState();
  const [articleimg, setarticleimg] = useState();

  const { Data: id } = useFetch("https://soccer-data.vercel.app/countArticles");

  let id_articles = id + 1;
  const articles = { id_articles, title, creator, createdate , articleimg };
  const Submithandler = (e) => {
    e.preventDefault();
    fetch("https://soccer-data.vercel.app/AddArticles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articles),
    })
      .then((res) => {
        console.log(res.text());
        window.location.replace(`https://soccer-data.vercel.app/AddContent/${id_articles}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = (e) => {
    e.preventDefault()
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/files/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
        
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setarticleimg(url)
        });
      }
    );
  };
  return (
    <>
      <h1 style={{color:'white'}}>Add Articles</h1>

      <div className="divinfo">
        <form encType="multipart/form-data"  onSubmit={Submithandler}>
          <input
            className="int"
            placeholder="title"
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            className="int"
            placeholder="creator"
            type="text"
            value={creator}
            onChange={(e) => {
              setcreator(e.target.value);
            }}
          />
          <textarea
            className="int"
            placeholder="discription"
            type="text"
            value={discription}
            onChange={(e) => {
              setdiscription(e.target.value);
            }}
          />
          <input
            className="int"
            placeholder="createdate"
            type="date"
            value={createdate}
            onChange={(e) => {
              setcreatedate(e.target.value);
            }}
          />
      
          <input className="inpfile" type="file" onChange={handleChange} accept="/image/*" />
         <div className="divupload" > <button  className="btnupload" onClick={handleUpload}>Upload {percent} % </button></div>
         <div className="articleimg"> 
        { articleimg && <img  className="imgcover" src={articleimg}/>}
          </div> 
          <div >     <input className="button" type="submit" value="Submit" /></div> 
        </form>
      </div>
    </>
  );
};

export default AddArticles;
