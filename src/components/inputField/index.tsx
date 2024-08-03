import { iInputComponent } from "@/typings/inputs";

export default function
  InputField({ type, label, focusColorClass, error, register, registerName }: iInputComponent) {
  return (
    <div className="w-full max-w-full flex flex-col">
      <input type={type}
        className={`
          outline-none px-[15px] py-[5px] w-full h-[40px] border border-gray-400
           ${focusColorClass}
        `}
        {...register(registerName)}
      />
      <label className="px-[5px] bg-white relative bottom-[50px] left-[15px] text-gray-400 text-sm w-fit">{`${label} ${error ? '*' : ''}`}</label>
      {error && <p className="text-xs text-red-600 font-semibold mt-[-20px] break-words">{error}</p>}
    </div>
  )
}
