export const ItemCount = ({ max, min = 0, counter, setCounter }) => {
  const handleSumar = (e) => {
    // op lógico AND
    counter < max && setCounter(counter + 1);
  };

  const handleRestar = () => {
    counter > min && setCounter(counter - 1);
  };

  return (
    <div className="border-gray relative mx-6 inline-block w-40 rounded-full border-2 border-solid p-4 text-center">
      <button
        className="bg-gray absolute top-[-0.1rem] left-[-0.1rem] h-[3.9rem] w-[3.9rem] rounded-full"
        onClick={handleRestar}
      >
        <p className="font-nunito text-2xl text-white">-</p>
      </button>
      <span className="font-nunito text-lg">{counter}</span>
      <button
        className="bg-gray absolute top-[-0.1rem] right-[-0.1rem] h-[3.9rem] w-[3.9rem] rounded-full"
        onClick={handleSumar}
      >
        <p className="font-nunito text-white">+</p>
      </button>
    </div>
  );
};
