import React from "react";
import Layout from "../../../components/layout";
import Mentoring from "../../../components/mentoring";

const index = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col space-y-5 md:mx-30 lg:mx-52 mx-5 text-left ">
          <Mentoring />
        </div>
      </Layout>
    </div>
  );
};

export default index;
