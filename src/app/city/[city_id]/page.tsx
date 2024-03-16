import Table from "@/components/table/Table";
import TableDistrict from "@/components/table/TableDistrict";

const CityDetail = async ({ params }: { params: { city_id: string } }) => {
    const res = await fetch(`https://vapi.vnappmob.com/api/province/district/${params.city_id}`)
    const data = await res.json();
    console.log(data);
    
    return (
        <div>
            <TableDistrict value={data} />
        </div>
    )
}

export default CityDetail