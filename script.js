/*const apiURL ="https://jsonplaceholder.typicode.com/users";
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
            .then(json => {
            document.getElementById('valueNombre').value = json.name || '';
            document.getElementById('valueApellido').value = json.username || '';
            document.getElementById('valueFecha').value = json.id || '';
        
        })
            .catch(error => console.error(error));
        }
  */
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('registrationForm');
            const submitBtn = document.getElementById('submitBtn');
        
            submitBtn.addEventListener('click', function() {
                const nombre = document.getElementById('nombre').value;
                const apellido = document.getElementById('apellido').value;
                const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        
                const formData = {
                    nombre,
                    apellido,
                    fechaNacimiento
                };
        
                // Realiza la solicitud POST al servidor
                fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Respuesta del servidor:', data);
                    alert('Usuario registrado.');
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Hubo un error al registrar al usuario');
                });
            });
        });