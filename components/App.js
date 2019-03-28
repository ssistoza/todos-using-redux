import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';
const App = () => (
    <Container text id="todo-app-container">
        <Header>My Todo Application</Header>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </Container>
);

export default App;
