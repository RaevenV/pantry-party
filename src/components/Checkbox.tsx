import { useState } from "react";

interface CheckboxProps {
  label: string;
}

function Checkbox({ label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="hidden" 
        />
        <div
          className={`appearance-none h-5 w-5 border-2 border-[#f5f5dc] rounded-[2px] mr-2 flex items-center justify-center ${
            isChecked ? 'bg-[#f5f5dc]' : 'bg-transparent'
          }`}
        >
          {isChecked && (
            <span className="text-[#256B4A]" style={{ fontSize: '20px' }}>
              ✔
            </span>
          )}
        </div>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
