import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'


function Header(){

	return (
			
	
				
				<Navbar bg="primary" variant="dark" fixed="top">
		   			 <Navbar.Brand href="#home" className="justify-content-center">Saw Super Hero</Navbar.Brand>
					<Form inline>
    <FormControl type="text" placeholder="Search Your Super Hero" className="mr-sm-2" />
    <Button type="submit" bg="primary" variant="info">Submit</Button>
  </Form>
					
		  		</Navbar>					

			
		);
}

export default Header;
	