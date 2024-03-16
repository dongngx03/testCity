import TableWard from '@/components/table/TableWard';
import React from 'react'

const DistrictDetail =async ({ params }: { params: { district_id: string } }) => {
    const res = await fetch(`https://vapi.vnappmob.com/api/province/ward/${params.district_id}`)
    const data = await res.json();
    console.log(data);
    
    return (
        <div>
            <TableWard value={data} />
        </div>
    )
}

export default DistrictDetail