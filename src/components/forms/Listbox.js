import { Fragment } from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";

export default function ListBox({
  options,
  value,
  label,
  placeholder,
  className,
  isDisabled,
  error,
  ...props
}) {
  const { setFieldValue, handleChange } = useFormikContext();
  const [field] = useField(props);

  return (
    <Listbox
      as="div"
      {...field}
      {...props}
      value={field.value}
      disabled={isDisabled}
      onChange={(val) => {
        handleChange(val);
        setFieldValue(field.name, val);
      }}
    >
      <div className="relative">
        <Listbox.Label className="label text-left" htmlFor={label}>
          {label}
        </Listbox.Label>
        <Listbox.Button
          className={`${
            isDisabled && "bg-gray-200 pointer-events-none"
          } relative w-full pl-3 pr-10 text-left form-control focus-within:border-primary ${
            error ? "form-error" : ""
          }`}
        >
          <span
            className={`block truncate ${
              value ? "" : "text-base text-gray-400"
            }`}
          >
            {value || placeholder}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDownIcon
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
            />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={`absolute z-50  ${
              className ? className : "w-full"
            } py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
          >
            {options?.map((item, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `${active ? "text-forgot bg-amber-100" : "text-gray-900"}
                cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={item}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {item.title || item.type || item.categories || item}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-tertiary" : "text-tertiary"
                        }
                        absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon
                          className="w-5 h-5 text-secondary"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
        {error ? (
          <ErrorMessage
            name={field.name}
            component="div"
            className="error-msg absolute pointer-events-none mt-[2px]"
          />
        ) : null}
      </div>
    </Listbox>
  );
}
