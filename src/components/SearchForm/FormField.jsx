import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

const FormField = ({ control, label, name, Component }) => {
  return (
    <div className="">
      <p className="mb-1 font-bold">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={name}
              control={control}
            />
          );
        }}
      />
    </div>
  );
};

FormField.propTypes = {
  control: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  Component: PropTypes.func,
};
export default FormField;
