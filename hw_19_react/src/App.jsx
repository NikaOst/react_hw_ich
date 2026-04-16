import './App.css';
import { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

function App() {
  const [formData, setData] = useState({ name: '', desc: '' });
  const { name, desc } = formData;

  const haldelSubmit = (values) => {
    setData({ name: values.name, desc: values.description });
  };

  return (
    <div>
      <h1>Форма с использованием Ant Design</h1>
      <Form onFinish={haldelSubmit} layout="vertical">
        <Form.Item label="Имя" name="name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item label="Описание" name="description">
          <Input placeholder="Description" />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
      <Card style={{ width: 300 }}>
        <h2>Отправленные данные:</h2>
        <p>Name: {name}</p>
        <p>Description: {desc}</p>
      </Card>
    </div>
  );
}

export default App;
// Реализуйте функцию для обновления состояния полей ввода при их изменении.
