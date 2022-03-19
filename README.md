# cs147
To run this prototype please execute the following commands:
1) git clone --branch tmp https://github.com/ruslanjabari/cs147.git
2) navigate to the cloned directory (i.e. cd cs147)
3) install the node modules (npm install within the cs147 directory)
4) expo start
      — Once you do expo start and a QR code is produced in your terminal, press i for an iphone simulator (you must have one installed) or a for an android 
      simulator. You can also scan the QR code and run the prototype on yoor phone if you have expo go.

* Note, if an error is thrown at any time, try pressing "dismiss" until you are out of the error screen, there should be no state-breaking errors.

**Further Guidance**
Once you open up the app, you will begin at the home feed, where you can see recent activity. From here, feel free to browse and check out our various features:
1) purchasing NFTs
2) following and messaging friends
3) joining communities
4) miscellaneous features like liking photos and browsing your own NFTs

**Prototype Limitations**
Some tradeoffs were made as we evolved from ou med-fi to high-fi.
1) Login was dropped—this feature was not needed to demonstrate the core functionality of Entourage and only distracted from time we preferred to spend on completing
the 3 core tasks. It's also uncessary to have login and only adds more friction to the sleek user experience that we are aiming for in this prototype.

2) Task 2 S4/S5 was dropped—This sceen was not worth implementing due to repetitive features and also due to features that go against our values. For example,
these screens show off portfolio value and we believe this only takes away from the focus on art and community-building. We know that there are some inherent
financial challenges that we must address in having exclusive communities accessed via NFT purchase, and this number being used to flex value only exacerbates the
issue. Furthermore, this page has an option to play a snippet on Spotify, but given Spotify's recent refusal to adequately punish Joe Rogan, we feel that we should
leave them out of this app.

3) Analytics page finer details—We got rid of the play on Spotify button for the same reason cited above and we removed the small statistics at the bottom of the
screen as we felt they may overwhelm users in a space that is already new and confusing (NFTs). This is also why we have decided to only show the most recent week
on the graph, but may give users more control as development progresses.

4) We tweaked our med-fi and hi-fi community joining flow—the original community flow presented users with an option to join a community or join the discord which
didn't make sense since you have to join the community to join the discord. We moved these prompts into different steps and went minimalist with the joining discord
option by just having the logo in the individual campaign screen.

5) In the "Join Now" screen for communities, we ended up having 1 community image per row instead of 2. We feel this better shows off the community annd gives
users the chance to not be overwhelmed, something we really prioritize in an app in such a new space.



Some other, less design-oriented, limitations are that the home feed doesn't update with NFT purchases from other users because they don't exist and messages
are not sent back from other users for the same reason. We focused on finishing corre functionality instead of adding these smaller nice-to-haves.

Thank you for your time and help! It has been a great quarter :)
