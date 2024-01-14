import db from '@/config/database';
import BarangTable from '@/models/BarangTable';
import { NextResponse } from 'next/server';

const res = NextResponse;
export async function POST(req) {
    await db.authenticate();
    const newBarang = {
        nama_barang: 'ale ale',
        harga_barang: 2000,
        satuan_barang: 'cup'
    }
    try {
        await BarangTable.create(newBarang);
        return res.json({message: "Berhasil membuat barang baru!", barang: newBarang}, {status: 200})
    } catch (error) {
        return res.json({message: error})
    }
}

export async function GET(req) {
    return res.json({message: "Cannot /GET"});
}