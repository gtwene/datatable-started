import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  "Account Number",
  "Account Description",
  "Customer ID",
  "Product Description",
  "Arm Officer",
  "Date Opened",
  "Status",
  "Created By",
];

const data = [
  [
    "10001",
    "Savings Account",
    "112",
    "NY",
    "ArmOfficer",
    "25 May 2000",
    "Active",
    "Godfrey",
  ],
  [
    "10002",
    "Current Account",
    "113",
    "CT",
    "ArmOfficer",
    "25 May 2001",
    "Inactive",
    "Godfrey",
  ],
  [
    "10003",
    "Current Account",
    "114",
    "FL",
    "ArmOfficer",
    "25 May 2002",
    "Active",
    "Godfrey",
  ],
  [
    "10004",
    "Savings Account",
    "116",
    "TX",
    "ArmOfficer",
    "25 May 2003",
    "Inactive",
    "Godfrey",
  ],
  [
    "10005",
    "Savings Account",
    "116",
    "TX",
    "ArmOfficer",
    "25 May 2003",
    "Inactive",
    "Godfrey",
  ],
];

const options = {
  filterType: "checkbox",
};

const Datatable = () => {
  return (
    <div>
      <MUIDataTable
        title={"X-100 Datatable"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default Datatable;
