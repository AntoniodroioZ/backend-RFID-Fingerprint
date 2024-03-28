const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Define una ruta de ejemplo
app.get('/', (req, res) => {

    const data = {
        id: 1,
        user: 'John Doe',
        age: 30,
        email: `jhonemail@email.com`,
        into_school_db: false,
        into_school: true,
    };
    res.json(data);
});

app.post('/createUser', async (req, res) => {
    try {
        // Obtén los datos del cuerpo de la solicitud
        const userData = req.body;
        console.log('userData:', userData);

        // Inserta los datos del usuario en la base de datos
        await knex('users').insert(userData);

        res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
});

// Configura el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
