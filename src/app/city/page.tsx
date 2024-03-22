import Table from "@/components/table/Table";
import { Suspense } from "react";
import Loading from "./loading";

const CityPage = async () => {
    const res = await fetch("https://vapi.vnappmob.com/api/province/")
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Table value={data} />
            </Suspense>
        </div>
    )
}

export default CityPage