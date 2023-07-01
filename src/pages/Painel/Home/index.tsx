import React from "react";
import Dashboard from "../../../components/Adm/Layout";
import Layout from "../../../components/Adm/Layout";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from 'mdb-react-ui-kit';
import "./style.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Home() {
  return (
    <>
      <Layout>
        <MDBCard className="card card1">
          <MDBCardBody>
            <MenuBookIcon />
            <MDBCardTitle>LIVROS CADASTRADOS</MDBCardTitle>
            <MDBCardText>
              0
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="card card2">
          <MDBCardBody>
            <ShoppingCartIcon />
            <MDBCardTitle>TOTAL DE VENDAS</MDBCardTitle>
            <MDBCardText>
              0
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="card card3">
          <MDBCardBody>
            <MonetizationOnIcon />
            <MDBCardTitle>LUCRO TOTAL</MDBCardTitle>
            <MDBCardText>
              R$ 0,00
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </Layout>
    </>
  );
}
