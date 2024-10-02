import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import {
  HiCircleStack,
  HiComputerDesktop,
  HiDocumentDuplicate,
} from "react-icons/hi2";

const Dashboard = () => {
  return (
    <section>
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-5">
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Product"}
              icon={<HiCircleStack size={30} />}
              url={"/product"}
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Sales"}
              icon={<HiComputerDesktop size={30} />}
              url={"/sale"}
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Voucher"}
              icon={<HiDocumentDuplicate size={30} />}
              url={"/voucher"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Dashboard;
