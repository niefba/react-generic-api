import {useState} from 'react';

interface Data {
    id: number,
    [key: string]: number | string | object
}

export function InputAutoFilter({data, property, valueChange, value}: {data: Data[], property: string, valueChange: (value: string) => void, value: string}) {
    const [filter, setFilter] = useState('');

    const selectValue = (value: string) => {
        valueChange(value);
        setFilter(value);
    }


    return (
        <div className="inline-block">
            <label className="block text-sm font-medium text-gray-700 text-left">{property}</label>
            <input type="text" className="border border-gray-300 rounded p-2"
                placeholder="Type to filter..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                />
            { filter.length > 0 && value !== filter &&
            <div className='relative'>
                <ul className="absolute border bg-white border-gray-300 rounded">
                    {data.filter((item)=> {
                        // Filter should not be case-sensitive
                        const regexp = new RegExp('' + filter, 'gi');
                        return typeof item[property] == 'string' && item[property].match(regexp)}
                        ).map((item) => {
                            // Retrieve the value of the corresponding property
                            const value = item[property];
                            if (typeof value == 'string') {
                                // Split the value into parts to highlight the filter in bold
                                const regexp = new RegExp('' + filter, 'gi');
                                const parts = value.split(regexp);
                                let position = 0;
                                return (
                                    <li key={item.id} className="p-2">
                                        {parts.map((part, index) => {
                                            // Retrieve the glue between the parts from the original value to fit case-sensitive
                                            const glue = value.slice(position + part.length, position + part.length + filter.length);
                                            position += (filter.length + part.length);
                                            return (
                                                <span key={index} onClick={() => selectValue(value)} className="cursor-pointer">
                                                    {part}
                                                    {index < parts.length - 1 && <span className="font-bold">{glue}</span>}
                                                </span>
                                            )
                                        })}
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
            }
        </div>
    )
}