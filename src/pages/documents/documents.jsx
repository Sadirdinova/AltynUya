import React, { useState, useRef, useEffect } from 'react'
import './documents.scss'
import '../news-page/news/news.scss'
import { Api } from '../../api';

function Documents() {

  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState({
    files: ''
  });
  const [uploaded, setUploaded] = useState([]);
  const [docs, setDocs] = useState([]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile({ ...selectedFile, files: file });
    // console.log(selectedFile, 'files');
  }

  useEffect(() => {
    console.log(selectedFile, 'files');
  }, [selectedFile]);


  const handlePick = () => {
    filePicker.current.click();
  }

  const getDocs = async () => {
    try {
      const response = await Api.get('/files/');
      setDocs(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Ошибка получения данных:', error);
    }
  }

  useEffect(() => {
    getDocs();
  }, [])

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Пожалуйста, выберите файл для загрузки");
      return;
    }

    try {
      const response = await Api.post('/files/', selectedFile);
      setUploaded(prevUploaded => [...prevUploaded, response.data]);
      console.log('success', response.data);
    } catch (error) {
      console.error('Ошибка отправки данных на сервер:', error)
    }
    console.log(uploaded, 'uploaded');
  }

  const deleteItem = async (id) => {
    try {
      await Api.delete(`/files/${id}`);
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  }

  const shortenedText = docs.slice(0, 20) + '...';

  return (
    <div className='documents newsPage'>
      <h3>Документтер</h3>
      <hr />
      <div className='content'>
        <input type="file"
          ref={filePicker}
          onChange={handleChange}
        />
        <div className='btn'>
          <button onClick={handlePick}>Добавить документ</button>
          <button onClick={handleUpload}>Загрузить</button>
        </div>
        {uploaded.map((item) => (
          <div className='docs'>
            <a href='' target='_blank'>{item.files}</a>
            <button onClick={() => deleteItem(item._id)}>Удалить</button>
          </div>
        ))}
        {docs.map(item => (
          <div className='docs' key={item.id}>
            <a href={item.file} target='_blank'>{shortenedText}</a>
            <button onClick={() => deleteItem(item._id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Documents