import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    const { id, ...itemprops } = item;

    return (
      <EmployeesListItem
        // name={elem.name} salary={elem.salary}
        {...itemprops}
        key={id}
        onDelete={() => onDelete(id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
