import React from 'react'
import { useSelector } from 'react-redux';
import Cliente from './cliente/Cliente';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function Clientes({setId}) {
    const clientes = useSelector(state => state.clientes)
    return (
        <>
            {clientes.map(cliente => {
             return (
                <Cliente key={cliente._id} setId={setId} clienteId={cliente._id} nombre={cliente.nombre} apellido={cliente.apellido} dni={cliente.dni} createAt={dayjs(cliente.createdAt).format('MM/DD/YYYY')}/>
             )   
            })}
        </>
    )
}