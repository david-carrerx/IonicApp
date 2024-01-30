<?php
require "config/Conexion.php";

  //print_r($_SERVER['REQUEST_METHOD']);
  switch($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        // Consulta SQL para seleccionar datos de la tabla
        $sql = "SELECT id, age, email, course FROM student";

        $query = $conexion->query($sql);

        if ($query->num_rows > 0) {
            $data = array();
            while ($row = $query->fetch_assoc()) {
                $data[] = $row;
            }
        
        // Devolver los resultados en formato JSON
        header('Content-Type: application/json');
        echo json_encode($data);
        } 
        else {
            echo "No se encontraron registros en la tabla.";
        }

        $conexion->close();
        
        break;

    case 'POST':
      if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Recibir los datos del formulario HTML
        $id = $_POST['id'];
        $age = $_POST['age'];
        $email = $_POST['email'];
        $course = $_POST['course'];
    
        // Insertar los datos en la tabla
        $sql = "INSERT INTO student (id, age, email, course ) VALUES ('$id', '$age','$email', '$course')";
    
        if ($conexion->query($sql) === TRUE) {
            echo "Datos insertados con éxito.";
        }
        else {
            echo "Error al insertar datos: " . $conexion->error;
        }
        } 
        
        else {
        echo "Esta API solo admite solicitudes POST.";
        }
    
        $conexion->close();
        
        break;

      case 'PATCH':
        if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
          parse_str(file_get_contents("php://input"), $data);
      
          $id = $data['id'];
          $age = $data['age'];
          $email = $data['email'];
          $course = $data['course'];

      
            if ($_SERVER['REQUEST_METHOD'] === 'PATCH') { // Método PATCH
                $updates = array();
                if (!empty($id)) {
                    $updates[] = "id = '$id'";
                }
                if (!empty($age)) {
                    $updates[] = "age = '$age'";
                }
                if (!empty($email)) {
                    $updates[] = "email = '$email'";
                }
                if (!empty($course)) {
                    $updates[] = "course = '$course'";
                }
      
                $updates_str = implode(', ', $updates);
                $sql = "UPDATE student SET $updates_str WHERE id = $id";
            }
      
            if ($conexion->query($sql) === TRUE) {
                echo "Registro actualizado con éxito.";
            } 
            else {
              echo "Error al actualizar registro: " . $conexion->error;
            }
            }
            else {
                echo "Método de solicitud no válido.";
            }
      
            $conexion->close();
            break;

    case 'PUT':
        $input = json_decode(file_get_contents("php://input"), true);

        // Asegúrate de que los datos necesarios estén presentes
        if (isset($input['id']) && isset($input['age']) && isset($input['email']) && isset($input['course'])) {
            
            $id = $input['id'];
            $age = $input['age'];
            $email = $input['email'];
            $course = $input['course'];

            $sql = "INSERT INTO student (id, age, email, course) VALUES (?, ?, ?, ?)";
            $stmt = $conexion->prepare($sql);

            // Enlaza los parámetros y sus tipos
            $stmt->bind_param("sssi", $id, $age, $email, $course);

            if ($stmt->execute()) {
                $response = array("message" => "Registro insertado con éxito.");
                echo json_encode($response);
            } else {
                $response = array("error" => "Error al insertar registro: " . $stmt->error);
                echo json_encode($response);
            }

            $stmt->close();
        }
        else {
            $response = array("error" => "Faltan datos obligatorios en la solicitud.");
            echo json_encode($response);
        }

        break;
  
        case 'DELETE':
            // Obtener el ID del registro a eliminar desde la consulta
            $id_mae = isset($_GET['id_mae']) ? $_GET['id_mae'] : null;
    
            if (!empty($id_mae)) {
                // Procesar solicitud DELETE
                $sql = "DELETE FROM student WHERE id = $id_mae";
    
                // Realizar la consulta DELETE
                if ($conexion->query($sql) === TRUE) {
                    echo "Registro eliminado con éxito.";
                } else {
                    echo "Error al eliminar registro: " . $conexion->error;
                }
            } else {
                echo "El parámetro id_mae no se proporcionó en la consulta.";
            }
    
            // Cerrar la conexión a la base de datos
            $conexion->close();
            break;
        

        default:
            echo 'undefined request type!';
    }
?>