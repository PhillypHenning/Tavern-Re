# Get the name of each of the files 


`sudo service mongodb start`

for file in ../src/json/*; do
    SUBSTRING=${file:19:-5}
    echo "CREATING DATABASE: [$SUBSTRING]"


    `mongoimport --db Tavern-Re --collection $SUBSTRING --file $file --jsonArray`
done