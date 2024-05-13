/*
 *
 * HomePage
 *
 */

import React, { useEffect } from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import BasicTable from "../../components/Table";

const Wrapper = styled.div`
  padding: 18px 30px;
`;

const Header = styled.header`
  display: flex;
  gap: 2;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Header>
        <h2 style={{ fontSize: 24 }}> React Avançado Repositories</h2>
        <span style={{ color: "gray" }}>A list of our repositories</span>
      </Header>
      <BasicTable />
    </Wrapper>
  );
};

export default HomePage;
