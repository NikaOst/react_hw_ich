// Создайте функциональный компонент `UserForm`, который содержит форму для изменения имени и статуса пользователя.

import styles from './styles.module.css';
import { connect } from 'react-redux';
import React from 'react';
import { useForm } from 'react-hook-form';
import { setUserInfo } from '../../redux/actions';

function UserForm({ dispatch }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const editUser = (data) => {
    const newUser = {
      name: data.name,
      status: data.status,
    };
    dispatch(setUserInfo(newUser));
    reset();
  };

  const statusValid = (status) => {
    if (!status) return 'Поля не могут быть пустыми';
    if (status !== 'online' && status !== 'offline')
      return 'Допустимые значения: online или offline';
  };

  return (
    <form onSubmit={handleSubmit(editUser)}>
      <input
        {...register('name', { required: 'Поля не могут быть пустыми' })}
        type="text"
        placeholder="Full name..."
      />
      <input
        {...register('status', { validate: statusValid })}
        type="text"
        placeholder="Status..."
      />
      {errors.status && <span>{errors.status.message}</span>}
      <input type="submit" value={'Save'} />
    </form>
  );
}
export default connect()(UserForm);
