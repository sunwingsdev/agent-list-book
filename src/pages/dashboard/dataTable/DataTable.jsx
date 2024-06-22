import { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import "./DataTable.css";
import { useGetAllDataQuery } from "../../../redux/features/allApis/dataApi/dataApi";

const DataTable = () => {
  const { data, isLoading, isError } = useGetAllDataQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("oldest"); // State to track sorting order

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to check if object contains search term in any field
  const doesObjectContainSearchTerm = (obj, term) => {
    for (let key in obj) {
      if (obj[key].toString().toLowerCase().includes(term.toLowerCase())) {
        return true;
      }
    }
    return false;
  };

  // Function to sort data based on createdAt field
  const sortData = (data) => {
    return data.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "oldest" ? dateA - dateB : dateB - dateA;
    });
  };

  // Render loading state if data is still fetching
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Render error message if fetching data resulted in an error
  if (isError) {
    return <p>Error fetching data!</p>;
  }

  // Filter and sort the data based on search term and sorting criteria
  let filteredData = [];

  if (data) {
    filteredData = [...data];

    if (searchTerm.trim() !== "") {
      filteredData = filteredData.filter((item) =>
        doesObjectContainSearchTerm(item, searchTerm)
      );
    }

    // Sort filtered data based on selected sort order
    filteredData = sortData(filteredData);
  }

  // Function to handle sorting order change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="">
      <div className="tabContainItem_2">
        <div className="table-responsive">
          <Form.Group controlId="searchField">
            <Form.Control
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Form.Group>
          <Form.Group controlId="sortField">
            <Form.Label>Sort By:</Form.Label>
            <Form.Control
              as="select"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="oldest">Oldest</option>
              <option value="latest">Latest</option>
            </Form.Control>
          </Form.Group>
          <Table striped bordered hover>
            <thead>
              <tr className="text-center tableThBox">
                <th>TYPE</th>
                <th>ROLE</th>
                <th>ID</th>
                <th>PHONE APP LINK</th>
                <th>NUMBER </th>
                <th>COMPLAIN</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length !== 0 ? (
                filteredData.map(({ type, id, role, number, complain }) => (
                  <tr key={id} className="text-center">
                    <td>{type}</td>
                    <td>{role}</td>
                    <td>{id}</td>
                    <td>
                      <Link to={`http://wa.me/${number}`}>
                        <FaWhatsappSquare className="whatsAppIcon whatsAppIcon_2" />
                      </Link>
                    </td>
                    <td>{number}</td>
                    <td>{complain}</td>
                    <td>
                      <Link className="DT_icon">
                        <FaRegEdit />
                      </Link>
                      <Link className="DT_icon">
                        <AiTwotoneDelete />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;