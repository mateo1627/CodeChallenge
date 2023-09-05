const apiURL ="https://jsonplaceholder.typicode.com/users";
        const formDeRegistro = document.getElementById('formDeRegistro'); // Obtener el elemento del formulario

        function fetchAPIForm() {
            const formData = new FormData(formDeRegistro); // Crear un objeto FormData a partir del formulario
            const objetoForm = {};
            formData.forEach((value, key) => {
                objetoForm[key] = value;
            });

            fetch(apiURL, {
                method: "POST",
                body: JSON.stringify(objetoForm), // Convertir los datos del formulario a JSON
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.error(error));
        }
  
