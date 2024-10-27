import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import VoucherInfo from "../components/VoucherInfo";
// import SaleForm from "../components/SaleForm";

const Sale = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"Sale"} />
        <VoucherInfo />
        {/* <SaleForm /> */}
      </Container>
    </section>
  );
};

export default Sale;
