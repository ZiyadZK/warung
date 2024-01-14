import db from '@/config/database';
import { DataTypes } from 'sequelize';

const BarangTable = db.define('barang', {
    id_barang: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_barang: {
        type: DataTypes.STRING,
        allowNull: true
    },
    harga_barang: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    satuan_barang: {
        type: DataTypes.STRING,
    }
})

await BarangTable.sync().then(() => {
    console.log('Barang Table is Connected')
}).catch(error => {
    console.log('Barang Table is not Connected! ' + error)
})

export default BarangTable;



