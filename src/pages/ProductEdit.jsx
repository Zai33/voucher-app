import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import ProductEditCard from "../components/ProductEditCard";

const ProductEdit = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"product-edit"}
          links={[{ title: "product", path: "/product" }]}
        />
        <ProductEditCard />
      </Container>
    </section>
  );
};

export default ProductEdit;
