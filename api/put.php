<!DOCTYPE html>
<html>
<head>
    <title>Actualizar Registro</title>
</head>
<body>
    <h1>Actualizar Registro</h1>
    <!--Formulario de registro para actualización-->
    <form id="updateForm">
        <label for="id">ID</label>
        <input type="text" id="id" name="id" required><br>

        <label for="age">Age:</label>
        <input type="text" id="age" name="age"><br>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email"><br>

        <label for="course">Course:</label>
        <input type="text" id="course" name="course"><br>

        <button type="button" id="putButton">Actualizar con PUT</button>
        <button type="button" id="patchButton">Actualizar con PATCH</button>
    </form>

    <div id="response"></div>

    <!--Scripts necesarios para el funcionamiento de la actualización de registros-->
    <script>
        document.getElementById('putButton').addEventListener('click', function () {
            actualizarRegistro('PUT');
        });

        document.getElementById('patchButton').addEventListener('click', function () {
            actualizarRegistro('PATCH');
        });

        function actualizarRegistro(metodo) {
            var id = document.getElementById('id').value;
            var age = document.getElementById('age').value;
            var email = document.getElementById('email').value;
            var course = document.getElementById('course').value;

            var data = new URLSearchParams();
            data.append('id', id);
            data.append('age', age);
            data.append('email', email);
            data.append('course', course);

            fetch('method.php', {
                method: metodo,
                body: data
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                document.getElementById('response').textContent = data;
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
        }
    </script>
</body>
</html>
