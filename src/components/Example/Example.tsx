import React from 'react';

const list = [
    {
        title: 'Item 1',
        description: ''
    },
    {
        title: 'Item 2',
        description: ''
    },
    {
        title: 'Item 3',
        description: ''
    }
];

const Example = () => {
    return (
        <>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
                <div className="px-4 py-2">
                    <h1 className="text-gray-800 font-bold text-2xl ">To-do list</h1>
                </div>
                <form className="w-full mx-auto px-4 py-2">
                    <div className="flex items-center border-b-2 border-teal-500 py-2">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Add a task"
                        />
                        <button
                            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                            type="button">
                            Add
                        </button>
                    </div>
                </form>

                <ul className="divide-y divide-gray-200 px-4">
                    {list.map((item, index) => (
                        <li className="py-4" key={index}>
                            <div className="flex items-center">
                                <input
                                    id="todo1"
                                    name="todo1"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-100 focus:ring-teal-500 border-gray-300 rounded"
                                />
                                <label htmlFor="todo1" className="ml-3 block text-gray-900">
                                    <span className="text-lg font-medium">{item.title}</span>
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Example;
