import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {client} from './index'

import './App.css';

const GET_REPOSITORIES_OF_ORGANIZATION = gql `
{user(id: 7){
  id
  name
}}
`;

const App = () => (
  <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
    {({loading, error, data}) => {
      if (loading) 
        return <div>Fetching</div>
      if (error) 
        return <div>Error</div>

      return (
        <div>
          {/* {linksToRender.map(link => <Link key={link.id} link={link} />)} */
          console.log("test")}
          {"test"}
          <br/> {JSON.stringify(data)}
          <br/> {data.user.id}
          <br/> {JSON.stringify("getAllTasks(): " + getAllTasks())
}
        </div>
      )
    }}
  </Query>

);

export async function getAllTasks() {
  let taskList;
  await client
    .query({query: gql `
      {user(id: 6){
        id
        name
      }}
      `})
    .then(response => {
      taskList = response.data;
      console.log("response.data: " + JSON.stringify(response.data))

    });
  console.log("JSON.stringify(taskList)")
  console.log(JSON.stringify(taskList))
  return taskList;
}

export default App;