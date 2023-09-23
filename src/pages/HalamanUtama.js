import React, { useEffect, useState } from "react";
import { RenderList } from "../assets/component/RenderList";

export const HalamanUtama = () => {
  const [AllDoneTodo, setAllDoneTodo] = useState("all");
  const [DataSearch, setDataSearch] = useState("");
  const [Input, setInput] = useState("");
  const [Data, setData] = useState([
    {
      id: 1,
      task: "Nyuci mobil",
      Check: true,
    },
    {
      id: 2,
      task: "Memberi makan kucing",
      Check: true,
    },
    {
      id: 3,
      task: "Olahraga 10 menit",
      Check: false,
    },
    {
      id: 4,
      task: "Sarapan sereal",
      Check: true,
    },
    {
      id: 5,
      task: "Belanja harian",
      Check: false,
    },
    {
      id: 6,
      task: "Ngeprint tugas",
      Check: true,
    },
    {
      id: 7,
      task: "Bayar tagihan bulanan",
      Check: true,
    },
    {
      id: 8,
      task: "Berangkat kuliah",
      Check: false,
    },
    {
      id: 9,
      task: "Les bahasa Inggris",
      Check: true,
    },
    {
      id: 10,
      task: "Ke rumah Sabrina",
      Check: false,
    },
  ]);

  // renderlist
  const renderList = () => {
    let filteredData = Data;
    if (AllDoneTodo === "done") {
      filteredData = Data.filter((task) => task.Check);
    } else if (AllDoneTodo === "todo") {
      filteredData = Data.filter((task) => !task.Check);
    } else {
      filteredData = Data;
    }
    return filteredData.map((value) => {
      return <RenderList Data={value} key={value.id} Delete={setData} DataAll={Data} onCheck={handleCheckTask} />;
    });
  };

  // Tambah list
  const RenderSubmit = (e) => {
    e.preventDefault();
    const dataInput = Input;
    const dataAwal = Data;

    dataAwal.push({
      id: Data.length + 1,
      task: dataInput,
      Check: false,
    });
    setData(dataAwal);
    setInput("");
  };

  // update
  const handleCheckTask = (taskId, newCheckValue) => {
    const updatedData = Data.map((value) => (value.id === taskId ? { ...value, Check: newCheckValue } : value));
    setData(updatedData);
  };

  // delete done task
  const deleteDoneTasks = () => {
    const taskNotDone = Data.filter((task) => !task.Check);
    setData(taskNotDone);
  };

  // delete all list
  const deleteall = () => {
    setData([]);
  };

  // search
  useEffect(() => {
    renderList();
  }, []);

  const PencarianData = (e) => {
    let cari = Data.filter((value) => value.task.toLowerCase().includes(DataSearch));
    setData(cari);
  };

  return (
    // todo search
    <div className="flex flex-col justify-center items-center py-4 ">
      <h1 className=" font-bold text-xl">TodoSearch</h1>
      <div className="border border-black w-2/4 p-2 gap-4 flex flex-col rounded-[0.5rem] ">
        <div className="gap-4 flex flex-col w-3/4">
          <div className="flex items-center  bg-blue-400 text-white pl-3 gap-3 border-black border  rounded-[0.2rem]">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              onChange={(e) => {
                setDataSearch(e.target.value);
              }}
              placeholder="Search Todo"
              className="w-full text-black"
            ></input>
          </div>
          <button
            onClick={() => {
              PencarianData();
            }}
            className="flex flex-col bg-blue-400 text-white w-full rounded-[0.2rem] items-center"
          >
            Search
          </button>
        </div>
        <form onSubmit={RenderSubmit} className="flex flex-col w-3/4 gap-3 ">
          <div className="flex items-center bg-blue-400 w-full text-white pl-3 gap-3   border border-black">
            <i class="fa-sharp fa-solid fa-plus"></i>
            <input
              value={Input}
              placeholder="Masukan Task Baru"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className=" w-full  text-black"
            />
          </div>
          <button type="Submit" className=" bg-blue-400 text-white rounded-[0.2rem] w-full ">
            Submit
          </button>
        </form>
      </div>

      {/* todo list */}
      <div className="flex flex-col w-2/4 gap-3.5 ">
        <div className="flex justify-center mt-2 ">
          <h1 className="font-bold text-xl">TodoList</h1>
        </div>
        <div className="gap-4 flex ">
          <button onClick={() => setAllDoneTodo("all")} className={"bg-blue-400 text-white rounded-[0.2rem] w-full "}>
            All
          </button>
          <button onClick={() => setAllDoneTodo("done")} className={"bg-blue-400 text-white rounded-[0.2rem] w-full"}>
            Done
          </button>
          <button onClick={() => setAllDoneTodo("todo")} className={"bg-blue-400 text-white rounded-[0.2rem] w-full "}>
            Todo
          </button>
        </div>
      </div>

      {/* list */}
      <div className=" mt-4  ">
        <div className="flex flex-col gap-4 text-white ">{renderList()}</div>
      </div>

      {/* delete */}
      <div className="flex gap-4 mt-4 w-2/4">
        <button className="bg-red-500 text-white rounded-sm w-full" onClick={deleteDoneTasks}>
          Delete done tasks
        </button>
        <button className="bg-red-500 text-white rounded-sm w-full" onClick={deleteall}>
          Delete all tasks
        </button>
      </div>
    </div>
  );
};
