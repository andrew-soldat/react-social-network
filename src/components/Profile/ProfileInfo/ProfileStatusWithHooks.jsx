import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';
import styleForm from '../../common/FormsControls/FormsControls.module.css';

const ProfileStatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
      setStatus(props.status);
   }, [props.status]);
	
	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = (e) => {
      setEditMode(false);
		// setStatus(e.currentTarget.value);
   };
	const saveStatus = () => {
      setEditMode(false);
		props.updateStatus(status);
   };

	const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   };
	
	return (
      <div className={s.status}>
         {/* {!editMode && ( */}
            <div>
               <b>Status:</b> <span className={s.changeStatus} onClick={activateEditMode}>
                  {props.status || 'set status'}
               </span>
            </div>
         {/* )} */}
         {editMode && (
            <div className={s.inputChangeStatus}> 
               <input
                  onChange={onStatusChange}
                  autoFocus={true}
                  // onBlur={deactivateEditMode}
                  value={status}
               />
					<div className={s.rowButton}>
					<button onClick={saveStatus} className={styleForm.button}>Save</button>
					<button onClick={deactivateEditMode} className={styleForm.buttonCancel}>Cancel</button>
					</div>
            </div>
         )}
      </div>
   );
}
export default ProfileStatusWithHooks;