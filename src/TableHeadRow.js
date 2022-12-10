import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import dummyData from "./dummyData";
import "../src/modal.css";

function TableHeadRow({ data, setDataCopy }) {
  const [firstNameModal, setFirstNameModal] = useState(false);
  const [lastNameModal, setLastNameModal] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [TimeModal, setTimeModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);

  const firstNameSort = (type) => {
    if (type == "ASC") {
      data.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
      setDataCopy([...data]);
    } else if (type == "DESC") {
      data.sort((a, b) => (a.first_name > b.first_name ? -1 : 1));
      setDataCopy([...data]);
    } else {
      setDataCopy([...dummyData]);
    }
  };
  const lastNameSort = (type) => {
    if (type == "ASC") {
      data.sort((a, b) => (a.last_name > b.last_name ? 1 : -1));
      setDataCopy([...data]);
    } else if (type == "DESC") {
      data.sort((a, b) => (a.last_name < b.last_name ? 1 : -1));
      setDataCopy([...data]);
    } else {
      setDataCopy([...dummyData]);
    }
  };
  const timeSort = (type) => {
    if (type == "ASC") {
      data.sort((a, b) => (new Date(a.time) > new Date(b.time) ? 1 : -1));
      setDataCopy([...data]);
    } else if (type == "DESC") {
      data.sort((a, b) => (new Date(a.time) < new Date(b.time) ? 1 : -1));
      setDataCopy([...data]);
    } else {
      setDataCopy([...dummyData]);
    }
  };

  const genderFilter = (type) => {
    if (type == "Male") {
      let items = dummyData.filter((item) => {
        return item.gender == "Male";
      });

      setDataCopy(items);
    } else if (type == "Female") {
      let items = dummyData.filter((item) => {
        return item.gender == "Female";
      });

      setDataCopy(items);
    } else {
      setDataCopy([...dummyData]);
    }
  };
  const statusFilter = (type) => {
    if (type == "true") {
      let items = dummyData.filter((item) => {
        return item.status == "true";
      });

      setDataCopy(items);
    } else if (type == "false") {
      let items = dummyData.filter((item) => {
        return item.status == "false";
      });

      setDataCopy(items);
    } else {
      setDataCopy([...dummyData]);
    }
  };

  return (
    <>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">
          First Name
          <BsThreeDotsVertical
            style={{ cursor: "pointer" }}
            onClick={() => {
              setFirstNameModal(!firstNameModal);
              setLastNameModal(false);
              setGenderModal(false);
              setTimeModal(false);
              setStatusModal(false);
            }}
          />
        </th>
        <th scope="col">
          Last Name
          <BsThreeDotsVertical
            style={{ cursor: "pointer" }}
            onClick={() => {
              setLastNameModal(!lastNameModal);
              setGenderModal(false);
              setFirstNameModal(false);
              setTimeModal(false);
              setStatusModal(false);
            }}
          />
        </th>
        <th scope="col">
          Gender
          <BsThreeDotsVertical
            style={{ cursor: "pointer" }}
            onClick={() => {
              setGenderModal(!genderModal);
              setLastNameModal(false);
              setFirstNameModal(false);
              setTimeModal(false);
              setStatusModal(false);
            }}
          />
        </th>
        <th scope="col">
          Time
          <BsThreeDotsVertical
            style={{ cursor: "pointer" }}
            onClick={() => {
              setTimeModal(!TimeModal);
              setLastNameModal(false);
              setGenderModal(false);
              setFirstNameModal(false);
              setStatusModal(false);
            }}
          />
        </th>
        <th scope="col">
          Status
          <BsThreeDotsVertical
            style={{ cursor: "pointer" }}
            onClick={() => {
              setStatusModal(!statusModal);
              setLastNameModal(false);
              setGenderModal(false);
              setFirstNameModal(false);
              setTimeModal(false);
            }}
          />
        </th>
      </tr>
      <div
        className="menu-box"
        style={{
          left: "9%",
          display: firstNameModal ? "block" : "none",
        }}
      >
        <p
          onClick={() => {
            firstNameSort("unsort");
            setFirstNameModal(!firstNameModal);
          }}
        >
          Unsort
        </p>
        <p
          onClick={() => {
            firstNameSort("ASC");
            setFirstNameModal(!firstNameModal);
          }}
        >
          sort by ASC
        </p>
        <p
          onClick={() => {
            firstNameSort("DESC");
            setFirstNameModal(!firstNameModal);
          }}
        >
          sort by DESC
        </p>
      </div>
      <div
        className="menu-box"
        style={{
          left: "30%",
          display: lastNameModal ? "block" : "none",
        }}
      >
        <p
          onClick={() => {
            lastNameSort("unsort");
            setLastNameModal(!lastNameModal);
          }}
        >
          Unsort
        </p>
        <p
          onClick={() => {
            lastNameSort("ASC");
            setLastNameModal(!lastNameModal);
          }}
        >
          sort by ASC
        </p>
        <p
          onClick={() => {
            lastNameSort("DESC");
            setLastNameModal(!lastNameModal);
          }}
        >
          sort by DESC
        </p>
      </div>
      <div
        className="menu-box"
        style={{
          left: "50%",
          display: genderModal ? "block" : "none",
        }}
      >
        <p
          onClick={() => {
            genderFilter("All");
            setGenderModal(!genderModal);
          }}
        >
          All
        </p>
        <p
          onClick={() => {
            genderFilter("Male");
            setGenderModal(!genderModal);
          }}
        >
          Male
        </p>
        <p
          onClick={() => {
            genderFilter("Female");
            setGenderModal(!genderModal);
          }}
        >
          Female
        </p>
      </div>
      <div
        className="menu-box"
        style={{
          left: "68%",
          display: TimeModal ? "block" : "none",
        }}
      >
        <p
          onClick={() => {
            timeSort("unsort");
            setTimeModal(!TimeModal);
          }}
        >
          Unsort
        </p>
        <p
          onClick={() => {
            timeSort("ASC");
            setTimeModal(!TimeModal);
          }}
        >
          sort by ASC
        </p>
        <p
          onClick={() => {
            timeSort("DESC");
            setTimeModal(!TimeModal);
          }}
        >
          sort by DESC
        </p>
      </div>
      <div
        className="menu-box"
        style={{
          left: "88%",
          display: statusModal ? "block" : "none",
        }}
      >
        <p
          onClick={() => {
            statusFilter("All");
            setStatusModal(!statusModal);
          }}
        >
          All
        </p>
        <p
          onClick={() => {
            statusFilter("true");
            setStatusModal(!statusModal);
          }}
        >
          True
        </p>
        <p
          onClick={() => {
            statusFilter("false");
            setStatusModal(!statusModal);
          }}
        >
          False
        </p>
      </div>
    </>
  );
}

export default TableHeadRow;
