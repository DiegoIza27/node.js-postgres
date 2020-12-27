// paquete pg para conectar la base de datos postgres con node js 

// obtener datos 
const { db } = require('./conexionbd')
const getpersona = async() => {
    try {
        const res = await db.query('Select*from usuario ');
        console.log(res.rows);
        db.end();

    } catch (error) {
        console.log(error);
    }
}
const insertarcontra = async() => {
        try {

            const text = 'INSERT INTO usuario VALUES($1,$2)';
            const valores = ['500', '1234'];
            const resp = await db.query(text, valores);
            console.log(resp);
        } catch (error) {
            console.log(error)
        }
    }
    // getpersona();
    // insertarcontra();

const deletuser = async() => {
    try {
        const value = ['Daniela'];
        const text = `delete from  persona where per_nombre=$1`;
        const resp = await db.query(text, value);
        console.log(resp);

    } catch (error) {
        console.log(error);
    }
}
const editpersona = async() => {
        const text = 'update persona set per_nombre=$1  where per_nombre= $2 '
        const valores = ['JUGETE ES EL AMOR ', "Diego"];
        const resp = await db.query(text, valores)
        console.log(resp);
    }
    // deletuser();
editpersona();