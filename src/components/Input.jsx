export const Input = ({ type, name, placeholder, ...props }) => {
  return (
    <>
      <label className="text-xl block pl-5">{placeholder}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border-4 w-2/4 rounded-md m-3 hover:border-blue-600 h-10"
        {...props}
      />
    </>
  );
};
