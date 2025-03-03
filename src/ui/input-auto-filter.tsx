import {useState} from 'react';

interface IStringIndex {
    id: number,
    name: string,
    [key: string]: number | string | object
}

export function InputAutoFilter({data, property}: {data: IStringIndex[], property: string}){
    const [filter, setFilter] = useState('');



    return (
        <>
            <input type="text" className="border border-gray-300 rounded p-2 m-2"
                placeholder="Type to filter..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                />
            <ul className="border border-gray-300 rounded p-2 m-2">
                {data.filter((item)=> {
                    // filter should not be case-sensitive
                    const regexp = new RegExp('' + filter, 'gi');
                    return typeof item[property] == 'string' && item[property].match(regexp)}
                    ).map((item) => {
                        const value = item[property];
                        if (typeof value == 'string') {
                            const regexp = new RegExp('' + filter, 'gi');
                            const parts = value.split(regexp);
                            return (
                                <li key={item.id} className="p-2 border-b border-gray-300">
                                    {parts.map((part, index) => {
                                        return (
                                            <span key={index}>
                                                {part}
                                                {index < parts.length - 1 && <span className="font-bold">{filter}</span>}
                                            </span>
                                        )
                                    })}
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </>
    )
}