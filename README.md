# liri-node-app

Git Hub Pages Link: https://brothhammer.github.io/liri-node-app/

This is a command line application that uses NPM packages to access tweets,
movie information and information on songs.

In addition to displaying the results in the command line it will also write 
these results to a log file. 

Valid commands:
node liri-node-app my-tweets --> returns last 20 tweets of linked twitter profile
node liri-node-app spotify-this-song song name --> replace song name with acutal song name
node liri-node-app movie-this movie name --> replace movie name with actual movie name
node liri-node-app do-what-it-says --> looks at random.txt for arguments

In this exercise the focus was to get familar with the NPM documentation and use it to access three different API's.

Additionaly the NPM fs package was used to read and write arguments and outputs from and to files. 