import del from './delete_logo.webp';
import edit from './edit_logo.webp';
const StudentList = ({data}) => {
    return(<>
        <table className="border-separate border-spacing-y-1">
            <thead className="">
                <tr className="text-center bg-blue-900 text-white">
                    <th className="px-11 py-2  rounded-l-xl">ID</th>
                    <th className="px-11 py-2 ">Name</th>
                    <th className="px-11 py-2">Email</th>
                    <th className="px-11 py-2">Course</th>
                    <th className="px-11 py-2">Age</th>
                    <th className="px-11 py-2 rounded-r-xl">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((s)=>(
                        <tr key={s.id} className="bg-gray-100 text-center font-semibold">
                            <td className=" bg-blue-100 rounded-l-xl">{s.id}</td>
                            <td className="">{s.Name}</td>
                            <td className="">{s.Email}</td>
                            <td className="">{s.Course}</td>
                            <td className="">{s.Age}</td>
                            <td className="rounded-r-xl">
                                <button className="rounded-xl m-1">
                                    <img src={del} className='h-9 rounded-3xl'></img>
                                </button>
                                <button className="rounded-xl m-1">
                                    <img src={edit} className='h-9 rounded-3xl'></img>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>);
}
export default StudentList