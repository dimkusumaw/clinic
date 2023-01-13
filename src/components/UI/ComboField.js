import React from "react";
import { Listbox } from "@headlessui/react";

function ComboField(props) {
  return (
    <div className={props.className}>
      <label className={props.labelClass}>{props.field}</label>
      <Listbox value={props.value} onChange={props.onChange}>
        <div className="relative">
          <Listbox.Button className="w-full cursor-default rounded bg-white py-2 pl-3 pr-10 text-left border-2">
            {props.value.name}
          </Listbox.Button>
          <Listbox.Options className="absolute max-h-60 w-full bg-white overflow-auto rounded border-2 mt-1 text-left">
            {props.dataList.map((data, index) => (
              <Listbox.Option
                key={index}
                value={data}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-3 pr-4 ${
                    active ? "bg-sky-200 text-sky-900" : "text-gray-900"
                  }`
                }
              >
                {data.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

export default ComboField;
