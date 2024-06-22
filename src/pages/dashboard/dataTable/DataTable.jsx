import { Table } from "react-bootstrap";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import "./DataTable.css";

const DataTable = () => {
  return (
    <div className="">
      <div className="tabContainItem_2">
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr className="text-center tableThBox">
                <th>TYPE</th>
                <th>ROLE</th>
                <th>ID</th>
                <th>PHONE APP LINK</th>
                <th>NUMBER</th>
                <th>COMPLAIN</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>Tamim Khan</td>
                <td>Admin</td>
                <td>001</td>
                <td>
                  <Link>
                    <FaWhatsappSquare className="whatsAppIcon whatsAppIcon_2" />
                  </Link>
                </td>
                <td>+971556850160</td>
                <td>COMPLAIN</td>
                <td>
                  <Link className="DT_icon">
                    <FaRegEdit />
                  </Link>
                  <Link className="DT_icon">
                    <AiTwotoneDelete />
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
