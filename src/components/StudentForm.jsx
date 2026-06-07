const StudentForm = ({s,setStudent,saved,err}) =>{
    return(
        <div className=" bg-white m-2 rounded-xl shadow shadow-xl p-10">
            <h1 className="font-['Roboto'] text-2xl font-bold text-blue-800 mb-4">Add Student</h1>
            {/* <form onSubmit={saved} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"> */}
            <form onSubmit={saved} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div>

                    <label className="font-bold text-lg font-['Roboto'] text-gray-600"> Name : </label>

                    <input value={s.Name} onChange={(e)=>setStudent({...s,Name: e.target.value})} type="text" className=" w-auto border boreder-gray-100 p-2 m-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900" placeholder="Name"/>

                    <span className="text-sm text-red-500 whitespace-nowrap">{err.name}</span>
                </div>

                <div>
                    <label className="font-bold text-lg font-['Roboto'] text-gray-600">
                    Email : </label>

                    <input value={s.Email} onChange={(e)=>setStudent({...s,Email: e.target.value})} type="text" className=" w-auto border boreder-gray-100 p-2 m-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900" placeholder="Email"/>
                    <span className="text-sm text-red-500 whitespace-nowrap">{err.email}</span>
                    </div>

                <div>
                    <label className="font-bold text-lg font-['Roboto'] text-gray-600">Course : </label>

                    <input value={s.Course} onChange={(e)=>setStudent({...s,Course: e.target.value})} type="text" className=" w-auto border boreder-gray-100 p-2 m-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900" placeholder="Course"/>
                    
                    <span className="text-sm text-red-500 whitespace-nowrap">{err.course}</span>

                </div>
                
                <div>
                    <label className="font-bold text-lg font-['Roboto'] text-gray-600">
                    Age : </label>
                    <input value={s.Age} onChange={(e)=>setStudent({...s,Age: e.target.value})} type="text" className=" w-auto border boreder-gray-100 p-2 m-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900" placeholder="Age"/>
                    
                    <span className="text-sm text-red-500 whitespace-nowrap">{err.age}</span>
                </div>
                <div>
                    <button type="submit" className="bg-blue-900 rounded mt-9 md:mt-9 lg:mt-3 p-2  w-auto text-white font-bold hover:bg-blue-800">ADD</button>
                </div>
            </form>
        </div>
    );
}
export default StudentForm