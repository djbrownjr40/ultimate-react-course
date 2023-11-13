import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {/* <FriendPercentage /> */}
      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} />
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}

// const feedback = [
//   "It was terrible (0%)",
//   "It was good (10%)",
//   "It was amazing (20%)",
// ];

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>
        How much was the bill?
        <input
          type="text"
          placeholder="Bill amount"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </label>
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>

    // <form>
    //   <div>How did you like the service?</div>
    //   <select>
    //     {feedback.map((option) => (
    //       <option value={option} key={option}>
    //         {option}
    //       </option>
    //     ))}
    //   </select>
    // </form>
  );
}

// function FriendPercentage() {
//   return (
//     <form>
//       <div>How did your friend like the service?</div>
//       <select>
//         {feedback.map((option) => (
//           <option value={option} key={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </form>
//   );
// }

function Total({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay ${bill + tip} (${bill} + ${tip}).
      </h3>
    </div>
  );
}

function ResetButton({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
