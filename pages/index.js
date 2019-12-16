import React, { useState, useContext } from "react";
import Head from "next/head";
import Modal from "react-modal";
import styled from "styled-components";

import Nav from "../components/nav";
import Form from "../components/Form";
import appContext from "../context/context";

const Home = props => {
  const { store, dispatch } = useContext(appContext);

  const afterOpenModal = () => {
    console.log("opened");
  };

  const closeModal = () => {
    dispatch({ type: "TOGGLE_FORM" });
  };
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <Modal
        ariaHideApp={false}
        isOpen={store.form}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Customer Form"
      >
        <button onClick={closeModal}> X </button>
        <Form />
      </Modal>
    </div>
  );
};

export default Home;

// const Container = styled.div`
/* .ReactModal__Overlay {
    background-color: black;
  }
  .modal {
    background-color: black;
  } */
// `;

// const styles ={
//   modalOverlay = {
//     backgroundColor: "black"
//   },
//   modal = {
//     backgroundColor: "black"
//   }
// };
