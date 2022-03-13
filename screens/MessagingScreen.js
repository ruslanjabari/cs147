import React, { useState, useCallback, useEffect, useContext } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';
import { Ye } from '../assets/icons';

export default function Example({ route }) {
    const [user, setUser] = useState(route.params.user);
    const [userDetails, setUserDetails] = useContext(UserDetailsContext);
    const [messages, setMessages] = useState([]);
    console.log(user, "frickin user")
    console.log(userDetails["messagesSent"][user], "RELEVANT DETAILS")
    console.log(...userDetails["messagesSent"][user], "is this a problemn")
    let firstText;
    if (user === "Drake" || user === "Kanye West" || user === "The Strokes" || user === "D. Savage") {
        firstText = "Thanks for following! Buy a NFT and join a community :)"
    } else {
        firstText = 'Thanks for following me!'
    }



    useEffect(() => {
        setMessages([
            ...(userDetails["messagesSent"][user]).reverse(),
            {
                _id: 1,
                text: firstText,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: user,
                },

            },

        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        console.log(messages, "who user")
        let prevMessages = userDetails["messagesSent"][user];
        setUserDetails({ ...userDetails, messagesSent: { ...userDetails.messagesSent, [user]: [...prevMessages, ...messages] } })
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}