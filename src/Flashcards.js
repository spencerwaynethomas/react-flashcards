import React from "react"
import { Button, Card, } from 'semantic-ui-react'
import Flashcard from "./Flashcard"


const Flashcards = ({ flashcards }) => (  
  <Card> 
    <Card.Content>
      <Card.Header> flashcards </Card.Header>
      <Card.Content> 
      {
        flashcards.map( flashcard => ( 
          <Card.Description key={flashcard}>
            <Card.Description>{flashcard.subject}</Card.Description>
 
            <Card.Description>

            </Card.Description>
          </Card.Description> 
        ))
      }
      </Card.Content>
    </Card.Content>
    <Card.Content>
      <div>
      <Button basic color='green'>
              Answer
          </Button>
          <Button basic color='red'>
            move on
          </Button>
      </div>
    </Card.Content>
  </Card>
  
);



export default Flashcards