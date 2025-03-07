import { Container } from "react-bootstrap";

import { Footer, Header } from "@components/common";
import { Outlet } from "react-router-dom";

import { ToastList } from "@components/feedback";

import style from "./style.module.css";
import "@styles/global.css";

const { container, wrapper } = style;
const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <ToastList />
      <Footer />
    </Container>
  );
};

export default MainLayout;
