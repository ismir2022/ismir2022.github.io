import React from "react";
import Layout from "../../../components/mmmtlayout";
import Mmmt from "../../../components/mmmt";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5 text-left ">
        <Mmmt/>
      </div>
    </Layout>
  );
};

export default Index;
