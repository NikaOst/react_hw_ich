// Создайте функциональный компонент `User`, который отображает имя и статус пользователя.
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';

function User({ name, status }) {
  return (
    <div className={styles.userData}>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
    status: state.status,
  };
};

export default connect(mapStateToProps)(User);
