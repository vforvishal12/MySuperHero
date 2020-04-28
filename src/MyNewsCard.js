import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';
//import CardGroup from 'react-bootstrap/CardGroup';

const MyNewsCard = ({articles}) => {
    return (
        <div>

            {articles.map((article, index) => (
                

 
            <Card border="dark" style={{ width: '100%' }}>
            	
			   	<Card.Img variant="top" src={article.images.lg} />
				

			   	
			    <Card.Body>
			      
			      	<Card.Title><Spinner animation="grow" variant="danger" /><Card.Link href="#" > {article.name} </Card.Link>
			      </Card.Title>
			     
			      <Card.Text><Spinner animation="grow" variant="success" /> About :- {article.biography.fullName}  -  {article.appearance.gender} -  {article.appearance.race} -  {article.appearance.height[0]} -  {article.appearance.weight[1]}
			      </Card.Text>

			      <Card.Text><Spinner animation="grow" variant="warning" /> Description :- {article.work.occupation}  -  {article.biography.placeOfBirth} 
			      </Card.Text>
			     
			       <Card.Text> <Spinner animation="grow" variant="info" /> {article.biography.publisher} 
			      </Card.Text>
			      <div>
					  <ProgressBar variant="success" label='Intelligence' animated now={article.powerstats.intelligence} />
					  <ProgressBar variant="info" label='Strength' animated now={article.powerstats.strength} />
					  <ProgressBar variant="" label='Speed' animated now={article.powerstats.speed} />
					  <ProgressBar variant="danger" label='Power' animated now={article.powerstats.power} />
				</div>
			    </Card.Body>	
		  </Card>
				

            ))} 
            

        </div>
    )
};

export default MyNewsCard;




