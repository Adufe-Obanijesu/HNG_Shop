export function TextInput({ name, label, value, setData, notRequired, placeholder }) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="text-gray-600 font-medium text-sm">{label}</label>
            
            <input id={name} value={value || ""} name={name} onChange={setData} placeholder={placeholder} type="text" className="mt-1 rounded bg-transparent text-gray-600 border border-blue-200 py-1.5 px-4 w-full focus:outline-blue-500" required={!notRequired} />
        </div>
    );
};

export function Email({ name, label, value, setData, placeholder }) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="text-gray-600 font-medium text-sm">{label}</label>
            
            <input id={name} type="email" value={value || ""} name={name} onChange={setData} placeholder={placeholder} className="mt-1 rounded bg-transparent text-gray-600 border border-blue-200 py-1.5 px-4 w-full focus:outline-blue-500" required />
        </div>
    );
}

export function TextArea({ name, label, value, setData }) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="font-medium text-gray-600 text-sm">{label}</label>
            <br/>
            <div className="mt-1 rounded border border-blue-200 focus:outline-blue-500 py-1 px-4 flex items-center">
            <textarea value={value || ""} name={name} onChange={setData} id={name} col={2} className="bg-transparent focus:outline-none text-gray-600 py-1.5 w-full grow"></textarea>
            </div>
        </div>
    );
}