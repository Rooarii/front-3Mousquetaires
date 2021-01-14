import formations from '../json/formations.json';
import projects from '../json/projects.json';
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

const CategoryMainPage = () => {
  return (
    <>
      <div className="header">
        <h1 className="title-header">Electronique</h1>
        <img className="img-header" src={formations.electronique[1].img }/>
      </div>
      <h1 className="category-title ">Projects :</h1>
      <div className="card-wrap">
      {projects.projectElectronique.map(e => {
  return (
    <Link className="link" to='/project'>
      <Card className="card-body">
        <CardImg top  width="auto" src={e.img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{e.name}</CardTitle>
        </CardBody>
      </Card> 
      </Link>
  )
})}
      </div>
      
      <h1 className="category-title ">Formations :</h1>
      <div className="card-wrap">
      {formations.electronique.map(e => {
        return (
          <Link className="link" to='/project'>
      <Card className="card-body">
        <CardImg top width="auto" src={e.img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{e.name}</CardTitle>
        </CardBody>
            </Card> 
            </Link>
  )
})}
      </div>
    </>
  )
}

export default CategoryMainPage;
