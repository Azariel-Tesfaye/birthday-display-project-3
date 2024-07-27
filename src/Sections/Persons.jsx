import { useCallback, useState } from "react";
import PeoplesCard from "../components/PeoplesCard";
import { peoples as initialPeoples} from "../constants";

const Persons = () => {
    const [peoples, setPeoples] = useState(initialPeoples)

    const clearAll = () => {
        setPeoples([])
    };

    const goBack = () => {
        setPeoples(initialPeoples);
    }

  return (
    <section className=" items-center w-[35rem] max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="font-palanquint text-start text-4xl font-bold mb-6">
        {peoples.length > 0 ?" 5 Birthdays Today" : "0 Birthdays Today"}</h3>
      <div className="flex flex-col space-y-1">
        {peoples.map((people) => (
          <PeoplesCard 
            key={people.name}
            image={people.imgURL}
            name={people.name}
            age={people.age}
          />
        ))}
      </div>
      {peoples.length > 0 ? (
      <button onClick={clearAll} className="mt-6 w-full h-10 text-white font-bold bg-purple-500 hover:bg-purple-700 duration-700 ;py-2 rounded-md">
        Clear All
      </button>
     ) : <button onClick={goBack} className="mt-6 w-full h-10 text-white font-bold bg-purple-500 hover:bg-purple-700 duration-700 ;py-2 rounded-md">
     Go Back
   </button>}
    </section>
  );
}

export default Persons