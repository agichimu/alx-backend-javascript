<<<<<<< HEAD
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}

=======
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [
      employees,
      ],
    };
}
>>>>>>> 4d6f73f853c0741afdfb5a465c68c3cb940fad05
