import React from "react";
import { Layout } from "antd";

import Header from "./Layout/header";
import Footer from "./Layout/footer";
import Breadcrumb from "./Layout/breadcrumb";

const { Content } = Layout;

const App = ({content: Componente}) => (
  <Layout>
    <Header />
    <Content style={{ padding: "0 50px", marginTop: 64 }}>
      <Breadcrumb />
      <div style={{ background: "#fff", padding: 24, minHeight: 450 }}>
        <Componente />
      </div>
    </Content>
    <Footer />
  </Layout>
);

export default App;
