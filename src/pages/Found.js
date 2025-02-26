import React from "react";

import PersonAlertList from "components/PersonAlert/PersonAlertList";
import { testPeopleData } from "components/PersonAlert/testPeopleData";

const Found = () => {
  return (
    <div>
      <PersonAlertList people={testPeopleData} status="found" />
    </div>
  );
};

export default Found;
