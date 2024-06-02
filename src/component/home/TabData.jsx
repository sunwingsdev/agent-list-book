/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../navbarMenu/navbarmenu.css";

const TabData = ({ tableHeading }) => {
  return (
    <div className="tabContain_2">
      <div className="tabContainItem_2">
        <h2>{tableHeading}</h2>
        <form action="">
          {/* <lable>Search:</lable> */}
          <input type="text" placeholder="Search.." />
        </form>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr className="text-center tableThBox">
                <th>TYPE</th>
                <th>ID</th>
                <th>PHONE APP LINK</th>
                <th>NUMBER</th>
                <th>COMPLAIN</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>Tamim Khan</td>
                <td>001</td>
                <td>
                  <Link>
                    <FaWhatsappSquare className="whatsAppIcon whatsAppIcon_2" />
                  </Link>
                </td>
                <td>+971556850160</td>
                <td>COMPLAIN</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TabData;
