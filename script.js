$(document).ready(onReady);

let Newemployee = [];

function onReady() {
    console.log('on ready');

    $('#addEmployee').on('submit', onAddEmployee);

    //Handle delete product button
    //$('.deleteBtn').on('click, onDeleteName');

    $(document).on('click', '.deleteBtn', onDeleteName);
    function onDeleteName() {
     console.log('onDeleteName');

     $(this).parents('tr').remove();



    }
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

    //Adding Employee

    Newemployee.push(employee);
     //Empty <tbody>
     $('#nameList').empty();

    for (let name of  Newemployee){
        $('#nameList').append(`
        <tr>
                <td>${employee.FirstName}</td>
                <td>${employee.LastName}</td>
                <td>${employee.ID}</td>
                <td>${employee.Title}</td>
                <td>$${employee.AnnualSalary}</td>
                <td>
                    <button class="deleteBtn">
                        Delete
                    </button>
                </td>
            </tr>
        `);
    }
     
    
    
}