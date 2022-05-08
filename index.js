// Add your code here
function submitData(name, email) {

    const formData = {
        name: name, 
        email: email, 
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(resp => resp.json())
        .then(obj => {
            const body = document.querySelector('body');
            const span = document.createElement('span');

            body.append(span);
            span.append(obj.id);
        })
        .catch(error => {
            alert("!");
            console.log(error.message);
            console.log("error message");

            const body = document.querySelector('body');
            const span = document.createElement('span');

            body.append(span);
            span.append(error.message);
        });
}  

