export default function RadioGroup({
  options,
  name,
  selected,
  setSelected,
  getLabel,
  title
}: RadioGroupProps) {
  return (
    <div>
      <p className="mb-[0.88rem] text-neutral-900">{title}</p>
      <div className="flex flex-col gap-2 ml-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              id={option}
              type="radio"
              className="border-neutral-300 w-6 h-6"
              name={name}
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option)}
            />
            <label htmlFor={option} className="text-body text-neutral-500">
              {getLabel(option)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

type RadioGroupProps = {
  name: string;
  options: string[];
  selected: string;
  title:string;
  setSelected: (value: string) => void;
  getLabel: (option: string) => string;
};
