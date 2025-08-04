import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemprops } = item;

    return (
      <EmployeesListItem
        // name={elem.name} salary={elem.salary}
        {...itemprops}
        key={id}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
