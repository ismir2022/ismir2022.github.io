import React from "react";
import Layout from "../../components/layout";
import Coc from "../../components/codeofconduct.js";

const index = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5 text-left ">
          <Coc />
        </div>
      </Layout>
    </div>
  );
};

export default index;
