
// components/ProjectDetails.js

import React from 'react';
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

// helper function - retrieves the project by id
const getProjectById = (id) => {
  let result = myProjects.find( (eachProject) => eachProject.id === id );
  return result;
};

// function component
const projectDetails = (props) => {
 
  console.log('props.location.search', props.location.search);  // url `query`
  console.log(props);

  // parsing the query string 
  const queryObj = queryString.parse(props.location.search)
  console.log('query object', queryObj);

  // Deconstruct the query params from props.match
  const { params } = props.match;
  const foundProject = getProjectById(params.id);
   
  return (
    <div>
      <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
      <h3>Used technologies: { foundProject.technologies }</h3>
      <p>{ foundProject.description }</p>

      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default projectDetails;