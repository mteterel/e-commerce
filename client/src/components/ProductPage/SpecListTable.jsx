import React from "react";
import PropTypes from "prop-types";
import SpecsTranslation from "../../translations/specs";
import ReactMarkdown from "react-markdown";
import { Table } from "react-bootstrap";

const SpecListTable = ({ specs }) => {
  return (
    <div>
      <Table striped bordered size={"sm"} style={{ marginBottom: 0 }}>
        <tbody>
          {Object.keys(specs).map((v, i) => (
            <tr key={i}>
              <th>{SpecsTranslation[v] ?? v}</th>
              <td>
                <ReactMarkdown source={specs[v]} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

SpecListTable.propTypes = {
  specs: PropTypes.object.isRequired
};

export default SpecListTable;
