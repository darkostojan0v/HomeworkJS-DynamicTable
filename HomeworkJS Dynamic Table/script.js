console.log('Homework Dynamic Table!');

function myTable() {
    let myArray = [
        {column1: 'column 1 - row 1', column2:'column 1 - row 2', column3:'column 1 - row 3'},
        {column1: 'column 2 - row 1', column2:'column 2 - row 2', column3:'column 2 - row 3'},
        {column1: 'column 3 - row 1', column2:'column 3 - row 2', column3:'column 3 - row 3'},
        {column1: 'column 4 - row 1', column2:'column 4 - row 2', column3:'column 4 - row 3'},
    ]
    let html = "<table border='1|1'>"

    setTimeout(() => {
        for(let i = 0; i<myArray.length; i++) {
            html+='<tr>';
            html+='<td>'+myArray[i].column1+'</td>';
            html+='<td>'+myArray[i].column2+'</td>';
            html+='<td>'+myArray[i].column3+'</td>';
            html+='<tr>';
        }

        document.getElementById('table').innerHTML = html;
    })
}

myTable()