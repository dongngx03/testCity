import Table from "@/components/table/Table";

const CityPage = async () => {
    const res = await fetch("https://vapi.vnappmob.com/api/province/")
    const data = await res.json();
    console.log(data);
    
    return (
        <div>
           <Table value={data} />
        </div>
    )
}

export default CityPage