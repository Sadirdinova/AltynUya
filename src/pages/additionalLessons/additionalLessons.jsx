import React, { useEffect, useState } from 'react';
import { Api } from '../../api';
import * as XLSX from 'xlsx';

function AdditionalLessons({ data }) {
    const [datas, setDatas] = useState([]);
    const [xlsxData, setXlsxData] = useState([]);

    const getDatas = async () => {
        try {
            const response = await Api.get('/lessons/');
            setDatas(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDataFromServer = async () => {
        if (datas.length > 0 && datas[0].image) { 
            try {
                const response = await fetch(datas[0].image);
                const buffer = await response.arrayBuffer();
                const workbook = XLSX.read(buffer, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const excelData = XLSX.utils.sheet_to_json(worksheet);
                setXlsxData(excelData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    useEffect(() => {
        getDatas();
    }, []);

    useEffect(() => {
        fetchDataFromServer()
    }, [datas]);
    console.log(xlsxData);

    const getLocal = localStorage.getItem('language');

    return (
        <div className='additionalLessons newsPage'>
            <h3>{data.lessons}</h3>
            <hr />

            {datas.map(item => (
                <div className='content' key={item.id}>
                    <h4>{getLocal === 'kg' ? item.title_head_ky : item.title_head_ru}</h4>
                    <p>{getLocal === 'kg' ? item.text_ky : item.text_ru}</p>
                    <h4>{getLocal === 'kg' ? item.title_ky : item.title_ru}</h4>
                </div>
            ))}

            {
                xlsxData.map((row,index) => (
                    <div key={index}>
                        {Object.values(row).map((value, index) => (
                            <span key={index}>{value}</span>
                        ))}
                    </div>
                ))
            }

            {/* <input type="file" accept='.xlsx, .xls' onChange={fetchDataFromServer} /> */}

            {/* {xlsxData.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            {Object.keys(xlsxData[0]).map((key, index) => (
                                <th key={index}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {xlsxData.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )} */}
        </div>
    );
}

export default AdditionalLessons;
