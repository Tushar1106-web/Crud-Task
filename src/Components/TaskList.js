import React, { useState } from "react";
import Listview from "./Listview";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskList = () => {
  const [activity, setactivity] = useState("");
  const [list, setlist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [checkedCount, setCheckedCount] = useState(0);

  const addActivity = () => {
    if (activity.trim() !== "") {
      setlist((prevList) => [...prevList, activity]);
      setactivity("");
    } else {
      alert("Please enter an activity");
    }
  };

  const remove = (index) => {
    const updatedData = list.filter((_, id) => id !== index);
    setlist(updatedData);
  };

  const handleedit = (index) => {
    setEditIndex(index);
    setactivity(list[index]);
  };

  const saveEdit = () => {
    if (activity.trim() !== "") {
      setlist((prevList) => {
        const updatedData = [...prevList];
        updatedData[editIndex] = activity;
        setactivity("");
        setEditIndex(null);
        return updatedData;
      });
    }
  };

  const cancelEdit = () => {
    setactivity("");
    setEditIndex(null);
  };

  const removeAll = () => {
    setlist([]);
  };

  return (
    <>
      <h1 className="text-black text-6xl text-center">
        Resolute Solutions Task performence 
      </h1>
      <div className="h-screen flex items-center justify-center bg-teal-lightest font-sans">
        
        <div className="bg-white shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg rounded-lg">
          
          <h1 className="text-grey-darkest text-5xl mb-4">Task List</h1>
          <div className="flex mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Task"
              value={activity}
              onChange={(e) => setactivity(e.target.value)}
            />
            {editIndex == null ? (
              <button
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-black"
                onClick={addActivity}
              >
                Add
              </button>
            ) : (
              <>
                <button
                  className="flex-no-shrink p-2 ml-2 bg-green-700 border-2 rounded text-white border-red"
                  onClick={saveEdit}
                >
                  Save
                </button>
                <button
                  className="flex-no-shrink p-2 ml-2 bg-gray-700 border-2 rounded text-white border-red"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </>
            )}
          </div>

          <div>
            {list.length > 0 && (
              <>
                <TransitionGroup
                  component="table"
                  className="w-full border-collapse border border-green-800"
                >
                  <thead>
                    <tr>
                      <th className="border border-green-600 p-2">Task</th>
                      <th className="border border-green-600 p-2">Checked</th>
                      <th className="border border-green-600 p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((item, index) => (
                      <CSSTransition
                        key={index}
                        timeout={300}
                        classNames="fade"
                      >
                        <Listview
                          key={index}
                          item={item}
                          index={index}
                          remove={remove}
                          handleedit={handleedit}
                        />
                      </CSSTransition>
                    ))}
                  </tbody>
                </TransitionGroup>
              </>
            )}
          </div>

          {list.length > 1 && (
            <button
              className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-black"
              onClick={removeAll}
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskList;
