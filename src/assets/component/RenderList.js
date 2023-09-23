import React, { useState } from "react";

export const RenderList = (props) => {
  const [Check, setCheck] = useState(props.Data.Check);
  const [task, settask] = useState(props.Data.task);
  const [edit, setedit] = useState(false);

  // delete list
  const deleteData = () => {
    props.Delete(props.DataAll.filter((value) => value.task !== props.Data.task));
  };
  return (
    <div className=" bg-blue-400 p-2 w-[48rem] rounded-md">
      <div className="flex justify-between items-center">
        {edit ? (
          <input
            value={task}
            onChange={(e) => {
              settask(e.target.value);
            }}
            className="border text-black"
          />
        ) : (
          <span className={`${Check ? "line-through" : ""}`}>{task}</span>
        )}
        <div className="flex gap-3">
          <input
            checked={Check}
            type="checkbox"
            onChange={(e) => {
              setCheck(!Check);
              props.onCheck(props.Data.id, !Check);
            }}
          />
          <button
            onClick={() => {
              setedit(!edit);
            }}
          >
            {edit ? "Simpan" : <i className="fa-sharp fa-solid fa-pen text-yellow-200"></i>}
          </button>
          <button onClick={deleteData}>
            <i class="fa-sharp fa-solid fa-trash text-red-500"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
