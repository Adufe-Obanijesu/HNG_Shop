export default function Loader({ large }) {
    return (
        <div className="w-screen h-center">
            <span className={`${large ? "w-20 h-20" : "w-6 h-6"} bg-transparent border-4 border-t-1 border-t-primary rounded-full animate-spin`}></span>
        </div>
    )
}