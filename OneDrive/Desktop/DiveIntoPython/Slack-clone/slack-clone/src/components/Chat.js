import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';
import db from '../firebase'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # clever
                    </ChannelName>
                    <ChannelInfo>
                        Add Topic
                    </ChannelInfo>
                </Channel>

                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>
                    {/* <InfoIcon/> */}
                </ChannelDetails>
            </Header>

            <MessageContainer>
                <ChatMessage/>
            </MessageContainer>
            <ChatInput/>

        </Container>
    )
}

export default Chat




const Container = styled.div`
    
    display: grid;
    grid-template-rows : 64px auto min-content;
    
`
const Header = styled.div`  
    padding-left : 20px;
    padding-right : 20px;
    display:flex;
    align-items:center;
    border-bottom : 1px solid rgba(83, 39, 83,.13);
    justify-content : space-between;
    
`


const MessageContainer = styled.div`
   
`




const Channel = styled.div``
const ChannelDetails = styled.div`
    display : flex;
    align-items : center;
    color : #606060;
`

const ChannelName = styled.div`
    font-weight:700;
    
`
const ChannelInfo = styled.div`
    font-weight:400;
    color : #606060;
    font-size: 13px;
    margin-top: 8px;

`
const Info = styled(InfoIcon)`
    margin-left:10px;
`