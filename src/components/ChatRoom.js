import React, { Component } from 'react'
import { Card, FormControl, Button } from 'react-bootstrap'
import firebase from 'firebase'
import { db_config } from '../Config/config'
import 'firebase/database'

export default class ChatRoom extends Component{ 
    constructor(){ 
        super()
        this.state = { 
            message:'',
            messages: [ 
               
             ]
         }

         this.app = firebase.initializeApp( db_config )
     }
    
   
   
     componentDidMount() {
         firebase.database().ref( 'messages/' ).on( 'value', snapshot => { 
             const CurrentMessages = snapshot.val()
             if( CurrentMessages != null ){ 
                 this.setState( { messages: CurrentMessages } )
              }
          } )
     }
     
   
     handleMessage = ( e ) => { 
         this.setState( { message:e.target.value } )
       
      }
     
     submitMessage = () => { 
         const message = { 
             id: this.state.messages.length,
             text: this.state.message
          }
        
        firebase.database().ref( 'messages/' + message.id ).set( message )
        this.setState( { message: ' ' } )
        
          
      } 
     

    render(){ 

        const CurrentMessages = this.state.messages.map( ( message, i ) =>{ 
            return( 
                <li key={ message.id } className='list-group-item list-group-item-action'>
                    { message.text }
                </li>
             )
         } )
 
        return( 
            <div>
                <Card>
                    <Card.Body>
                        <ul className='list-group'>
                            { CurrentMessages }
                        </ul>
                    </Card.Body>
                    <Card.Footer>
                        <FormControl type='text' value={ this.state.message } placeholder='Write a Message' onChange={ this.handleMessage } />
                        <Button variant='primary' block className='mt-2' onClick={ this.submitMessage }>
                            Send Message
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
         )
     }
 }
