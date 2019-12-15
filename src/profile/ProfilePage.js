import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export const ProfilePage = (props) => {
    
    return (
        <div className="container mgntop">
            <h2>Profile</h2>         
            <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                    BASIC INFORMATION
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <div className="row">
                        <div class="col-md-4">
                            Name:
                        </div>
                        <div class="col-md-4">
                            First Last
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <div className="row">
                        <div class="col-md-4">
                            Gender:
                        </div>
                        <div class="col-md-4">
                            Male
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <div className="row">
                        <div class="col-md-4">
                            Email:
                        </div>
                        <div class="col-md-4">
                            email@abc.com
                        </div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}