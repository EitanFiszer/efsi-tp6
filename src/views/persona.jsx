import React from 'react'
import { Link,useNavigate   } from "react-router-dom";
import Layout from '../components/Layout';
import Personas from "../Personas"
import {ListGroup} from "react-bootstrap"

export default function Home() {
  let navigate = useNavigate();

  const redirigir = (url)=>{
    navigate(url);
  }
;

  return (
    <>
        <Layout></Layout>
        <ListGroup>
        </ListGroup>
    </>
  )
}