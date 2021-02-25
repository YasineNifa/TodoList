import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CodeIcon from '@material-ui/icons/Code';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type='text' placeholder='Message Here...'/>
                    <SendButton>
                        <Send/>
                    </SendButton>
                </form>

                <IconsButton>
                    <RightIcons>
                        <FlashOn/>
                        <FormatBold/>
                        <AttachFile/>
                        <FormatListNumbered/>
                        <FormatListBulleted/>


                    </RightIcons>
                    <LeftIcons>
                            <MoreHoriz/>
                            <EmojiEmotions/>
                            <FormatColorText/>
                            <Favorite/>
                    </LeftIcons>

                </IconsButton>
            </InputContainer>
            
        </Container>
    )
}

export default ChatInput


const IconsButton = styled.div`
    display : flex;
    justify-content : space-between;
    align-items: center;
    background : grey;
    border : 1px solid;
    
`
const RightIcons = styled.div`
    display : flex;
    flex : 1;
    align-items: center;
    margin-right : 100px;
`
const LeftIcons = styled.div`
    
    display: flex;
    align-items: center;
`


const Container = styled.div`

    padding-left:20px;
    padding-right:20px;
    padding-bottom:24px;
`

const InputContainer = styled.div`
    border : 1px solid #8D8D8E;
    border-radius : 4px;
    form{
        display:flex;
        height: 42px;
        align-items: center;
        justify-content:space-between;
        padding-left:10px;
        border : 1px solid;


        input{
            flex: 1
            background-color:transparent;
            border:none;
            padding-left : 8px;
            padding-right : 8px;
            color: black;
            padding-top:4px;
            font-size:13px;
            padding-bottom:4px;
            }
            input:focus{
                outline:none;
            }
        }
    }
    
`

const SendButton = styled.div`
    background : #007a5a;
    border-radius : 2px;
    width: 32px;
    height:32px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:5px;
    cursor:pointer;
    .MuiSvgIcon-root{
        width:18px;
    }

`

const Send = styled(SendIcon)`
    color : #D9D9D9
`

const MoreHoriz = styled(MoreHorizIcon)`
    cursor : pointer;
`

const FlashOn = styled(FlashOnIcon)`
    cursor : pointer;
`

const FormatBold = styled(FormatBoldIcon)`
    cursor : pointer;
`

const AttachFile = styled(AttachFileIcon)`
    cursor : pointer;
`

const FormatListNumbered = styled(FormatListNumberedIcon)`
    cursor : pointer;
`

const FormatListBulleted = styled(FormatListBulletedIcon)`
    cursor : pointer;
`



const EmojiEmotions = styled(EmojiEmotionsIcon)`
    cursor : pointer;
`

const FormatColorText = styled(FormatColorTextIcon)`
    cursor : pointer;
`
const Favorite = styled(FavoriteIcon)`
    cursor : pointer;
`
