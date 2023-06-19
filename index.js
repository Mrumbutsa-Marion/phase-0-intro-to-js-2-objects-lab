// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "");
console.log(updatedEmployee);
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
console.log(employee);

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

const newEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log(newEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log(employee);
