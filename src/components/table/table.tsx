import { PartsProps } from '@/helpers/interface';

interface TableProps {
    data: ReadonlyArray<PartsProps>;
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <table className="min-w-full">
            <thead className="border border-blue-500 bg-blue-500 text-white font-bold py-2 px-4">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((part, index) => (
                    <tr
                        key={part.name}
                        className="border border-black even:bg-blue-500 odd:bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center"
                    >
                        <td>{index}</td>
                        <td>{part.name}</td>
                        <td>{part.type}</td>
                        <td>{part.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
