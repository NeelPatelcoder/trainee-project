import React from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.css';
import logo from './logo19211.png';


console.log(logo);

function Dropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    

  <div className='header'>
    
    <h1>Dropzone</h1>
    <section className="container">
    <img src={logo} alt="Logo" style={{height:40, width:96,margin:2}} />
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  </div>
  );
}

export default Dropzone;
