import './App.css';
import axios from "axios";
import React, {useEffect, useState} from "react";
import ContentWrapper from "./component/ContentWrapper";
import Loading from "./component/Loading";

export default function App(){
    const [payload,setPayload]=useState([])
    const [loading,setLoading]=useState(false)
    const [kolom,setKolom]=useState([
        { title: "Kode", field: "jenis_Lokasi" },
        { title: "Keterangan", field: "keterangan" },
    ])

    const get = () => {
        setLoading(true)
        axios.get('http://localhost:8081/api/jenislokasi')
            .then(res => {
                setPayload(Object.values((res.data.payload)))
                console.log(payload)
                setLoading(false)
            })
    }

    useEffect(() => {
        get()
    },[])

    if (loading){
        return (
            <div>
                <ContentWrapper>
                    <Loading/>
                </ContentWrapper>
            </div>
        )
    }else{
        return(
            <div>
                <ContentWrapper>

                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Jenis Lokasi</h3>
                        </div>
                        <div className="card-body">

                            <table id="example2" className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Kode</th>
                                    <th scope="col">Keterangan</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                                </thead>
                                <tbody>
                                {payload.map(x => (
                                    <tr>
                                        <td>{x.jenis_Lokasi}</td>
                                        <td>{x.keterangan}</td>
                                        <td></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
        )
    }
}