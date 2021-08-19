import s from './FormsControls.module.css';
import { Field } from 'redux-form';

export const FormControl = ({ input, meta: { touched, error }, children }) => {
   const hasError = touched && error;
   return (
      <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
         {children}
         {hasError && <span>{error}</span>}
      </div>
   );
};

export const Textarea = (props) => {
	const { input, meta, child, ...restProps } = props;
   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
	const { input, meta, child, ...restProps } = props;
   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, component, validators='', props={}, text="" ) => {
	return (
		<div className={s.line}>
			<Field
				placeholder={placeholder}
				name={name}
				component={component}
				validate={validators}
				{...props}
			/><div className={s.label}>{text}</div>
		</div>
	)
}
