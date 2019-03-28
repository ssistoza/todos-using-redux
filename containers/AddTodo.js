import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import { addTodo } from '../redux/actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <Form.Field>
          <input
            ref={node => {
              input = node;
            }}
          />
        </Form.Field>

        <Button type="submit" primary>
          Add Todo
        </Button>
      </Form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
