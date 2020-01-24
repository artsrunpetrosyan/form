import React, { useState } from 'react';
import Form from './components/form/Form';
import Card from './components/card/Card';
import './App.css';

function App() {
  const [forms, setForms] = useState([]);
  const [edit, setEdit] = useState(null);
  const cretaeForms = (newForm) => {
    if (newForm.id) {
      setForms(forms.map(form =>
        form.id === newForm.id ? newForm : form
      ));
      return;
    }

    newForm = {
      ...newForm,
      id: new Date().valueOf()
    };
    setForms([...forms, newForm]);

  };

  const deleteForm = (id) => {
    setForms(forms.filter(form => form.id ? !form.id : null))
  };

  const editForm = (id) => {
    const formEdit = forms.find(form => form.id === id)
    setEdit(formEdit)
  }

  return (
    <div>
      <Form cretaeForms={cretaeForms} edit={edit} />
      {forms.map(form => {
        return <Card key={form.id} form={form} deleteForm={deleteForm} editForm={editForm} />
      })}

    </div>
  );
}

export default App;
