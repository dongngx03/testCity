'use client'

import Link from "next/link"

interface Iprops {
    value: {
        results: []
    }
}

const Table = ({ value }: Iprops) => {

    return (
        <div>
            <table className="w-full border">
                <thead className="border">
                    <tr className="border ">
                        <th className="border">Stt</th>
                        <th className="border">ID</th>
                        <th className="border">Tên tỉnh</th>
                        <th className="border">chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        value.results.map((e: any, index) => (
                            <tr className="border" key={index}>
                                <td className="border text-center p-3">{index + 1}</td>
                                <td className="border text-center p-3">{e.province_id}</td>
                                <td className="border text-center p-3">
                                    <Link href={`/city/${e.province_id}`}>{e.province_name}</Link>
                                </td>
                                <td className="border text-center">{e.province_type}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table