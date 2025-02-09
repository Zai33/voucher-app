import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import VoucherCard from "../components/VoucherCard";

const VoucherDetail = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"voucher-detail"}
          links={[{ title: "Voucher", path: "/voucher" }]}
        />
        <VoucherCard />
      </Container>
    </section>
  );
};

export default VoucherDetail;
