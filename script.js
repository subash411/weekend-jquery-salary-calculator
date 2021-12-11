$(document).ready(onReady);
function onReady() {
    console.log('on ready');

    $('#addEmployee').on('submit', onAddEmployee);
}
function onAddEmployee(event) {

    // Preventing page from reload

    event.preventDefault();

    console.log('AnnualSalary added');

    // NEED TO Grab  data from the DOM
    //from my form inputs

    let FirstName = $('#nameInput').val();
    let LastName = $('#LastNameInput').val();
    let ID = Number($('#NumberInput').val());
    let Title = $('#TitleInput').val();
    let AnnualSalary = Number($('#SalaryInput').val());

    let employee = {
        FirstName: FirstName,
        LastName: LastName,
        ID: ID,
        Title: Title,
        AnnualSalary: AnnualSalary
    };
    console.log('New employee', employee);
}