import React from 'react';

/**
 *
 * @param placeholder
 * @param value
 * @param onChange
 * @param type
 * @param name
 * @param label
 * @param isRequired
 * @returns {*}
 * @constructor
 */
function Input({ placeholder, value, onChange, type, name, label, isRequired }) {
	return (
		<div className="control-group">
			<div className="form-group floating-label-form-group controls">
				<label>{label}</label>
				<input type={type}
				       className="form-control"
				       placeholder={placeholder}
				       name={name}
				       value={value}
				       onChange={onChange}
				       required={isRequired}/>
			</div>
		</div>
	);
}

export default Input;
