export default function DatePickerContainer({ onCancel, onSave }) {
  return (
    <div className="flex ml-auto p-3 gap-5 text-18">
      <button className="" onClick={onCancel}>
        Cancel
      </button>
      <button className="text-darkGreen" onClick={onSave}>
        OK
      </button>
    </div>
  );
}
